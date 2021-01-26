export class Client {
  deviceId: string;
  onOpen?: () => void;
  private socket: WebSocket | null = null;
  private freq: number = 20;
  private pulse: number = 0;
  constructor(deviceId: string) {
    this.deviceId = deviceId;
  }
  get path(): string {
    return `obniz/${this.deviceId}/ws/1`;
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
        this.setPwm();
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
  setPwm() {
    this.send({
      pwm0: {
        io: 0,
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
  setPulse(pulse: number) {
    this.pulse = pulse;
    this.send({
      pwm0: { pulse },
    });
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
