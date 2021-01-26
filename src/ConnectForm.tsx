import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { getAccessToken, getDeviceId } from './settings';

export interface ConnectFormPayload {
  deviceId: string;
  accessToken: string | null;
}

interface Props {
  onSubmit: (value: ConnectFormPayload) => void;
}
export const ConnectForm = ({ onSubmit }: Props) => {
  const [deviceId, setDeviceId] = React.useState(getDeviceId());
  const [accessToken, setAccessToken] = React.useState(
    getAccessToken(),
  );
  const handleSubmit = () => {
    deviceId &&
      onSubmit({
        deviceId,
        accessToken,
      });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <TextField
        label="Device ID"
        placeholder="XXXX-XXXX"
        required
        fullWidth
        value={deviceId || ''}
        onChange={(e) => setDeviceId(e.target.value)}
      />
      <TextField
        label="Access Token"
        placeholder=""
        fullWidth
        value={accessToken || ''}
        onChange={(e) => setAccessToken(e.target.value)}
      />
      <Button type="submit" fullWidth>
        Connect
      </Button>
    </form>
  );
};
