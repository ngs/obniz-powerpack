import { Button, Grid, TextField } from '@material-ui/core';
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
    <Grid
      container
      spacing={2}
      direction="column"
      component="form"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Grid item lg>
        <TextField
          label="Device ID"
          placeholder="XXXX-XXXX"
          required
          fullWidth
          value={deviceId || ''}
          onChange={(e) => setDeviceId(e.target.value)}
        />
      </Grid>
      <Grid item lg>
        <TextField
          label="Access Token"
          placeholder=""
          fullWidth
          value={accessToken || ''}
          onChange={(e) => setAccessToken(e.target.value)}
        />
      </Grid>
      <Grid item lg>
        <Button
          type="submit"
          fullWidth
          color="primary"
          variant="contained"
        >
          Connect
        </Button>
      </Grid>
    </Grid>
  );
};
