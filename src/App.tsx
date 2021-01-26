import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import { ConnectForm, ConnectFormPayload } from './ConnectForm';
import { Controller } from './Controller';
import * as settings from './settings';
import { Client } from './Client';
import { useStyles } from './style';

export const App = () => {
  const classes = useStyles();
  const [client, setClient] = React.useState<Client | null>(null);
  const [isConnected, setConnected] = React.useState(false);
  const handleSubmit = ({
    accessToken,
    deviceId,
  }: ConnectFormPayload) => {
    settings.setDeviceId(deviceId);
    settings.setAccessToken(accessToken);
    const client = new Client(deviceId, accessToken);
    client.onOpen = () => {
      setConnected(true);
    };
    client.onClose = () => {
      setClient(null);
      setConnected(false);
    };
    client.connect();
    setClient(client);
  };
  return (
    <Grid
      className={classes.root}
      direction="row"
      alignItems="center"
      justify="center"
      container
    >
      {client ? (
        isConnected ? (
          <Grid item xs={11} sm={8}>
            <Controller
              onChange={(v) => client?.setDuty(v)}
              onDisconnect={() => client.disconnect()}
            />
          </Grid>
        ) : (
          <CircularProgress />
        )
      ) : (
        <Grid item xs={11} sm={8}>
          <ConnectForm onSubmit={handleSubmit} />
        </Grid>
      )}
    </Grid>
  );
};
