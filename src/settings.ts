const DEVICE_ID_KEY = 'deviceId';
const ACCESS_TOKEN_KEY = 'accessToken';

export const getDeviceId = () => localStorage.getItem(DEVICE_ID_KEY);
export const setDeviceId = (value: string | null) =>
  value
    ? localStorage.setItem(DEVICE_ID_KEY, value)
    : localStorage.removeItem(DEVICE_ID_KEY);

export const getAccessToken = () =>
  localStorage.getItem(ACCESS_TOKEN_KEY);
export const setAccessToken = (value: string | null) =>
  value
    ? localStorage.setItem(ACCESS_TOKEN_KEY, value)
    : localStorage.removeItem(ACCESS_TOKEN_KEY);
