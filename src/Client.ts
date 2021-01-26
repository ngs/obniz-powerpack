export class Client {
  deviceId: string;
  accessToken: string | null;
  onOpen?: () => void;
  onClose?: () => void;
  private socket: WebSocket | null = null;
  private freq: number = 255;
  private pulse: number = 0;
  constructor(deviceId: string, accessToken: string | null = null) {
    this.deviceId = deviceId;
    this.accessToken = accessToken;
  }
  get path(): string {
    return `obniz/${this.deviceId}/ws/1${
      this.accessToken ? `?access_token=${this.accessToken}` : ''
    }`;
  }
  disconnect() {
    this.socket?.close();
  }
  connect() {
    this.socket = new WebSocket(`wss://obniz.com/${this.path}`);
    this.socket.onmessage = (ev) => {
      const data = JSON.parse(ev.data);
      const { redirect } = data[0].ws;
      console.info(redirect);
      this.socket?.close();
      this.socket = new WebSocket(`${redirect}/${this.path}`);
      this.socket.onopen = () => {
        this.onOpen && this.onOpen();
        this.setup();
      };
      this.socket.onclose = () => {
        this.onClose && this.onClose();
        this.socket = null;
      };
      window.onunload = () => {
        this.socket?.close();
      };
    };
  }
  send(...data: any) {
    if (!this.socket) return;
    this.socket.send(JSON.stringify(data));
  }
  setup() {
    this.send({
      io0: false,
      pwm0: {
        io: 4,
        freq: this.freq,
      },
      pwm1: {
        io: 5,
        freq: this.freq,
      },
    });
    this.updateDisplay();
  }
  updateDisplay() {
    this.send({
      display: {
        clear: true,
        text: `Freq: ${this.freq}\nPluse: ${this.pulse}`,
      },
    });
  }
  setDuty(duty: number) {
    this.setPulse((1 / this.freq) * 1000 * duty * 0.01);
  }
  setPulse(pulse: number) {
    this.pulse = pulse;
    if (pulse > 0) {
      this.send({
        pwm0: { pulse },
      });
    } else if (pulse < 0) {
      this.send({
        pwm1: { pulse: pulse * -1 },
      });
    } else {
      this.send({
        pwm0: { pulse: 0 },
        pwm1: { pulse: 0 },
      });
    }
    this.updateDisplay();
  }
  setFreq(freq: number) {
    this.freq = freq;
    this.send({
      pwm0: { freq },
    });
    this.updateDisplay();
  }
}
