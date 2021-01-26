const KEY = 'deviceId';

export const getDeviceId = () => localStorage.getItem(KEY);
export const setDeviceId = (value: string | null) =>
  value
    ? localStorage.setItem(KEY, value)
    : localStorage.removeItem(KEY);
