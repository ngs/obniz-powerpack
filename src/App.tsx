import React from 'react';
import {
  Button,
  CircularProgress,
  Container,
} from '@material-ui/core';
import { ConnectForm, ConnectFormPayload } from './ConnectForm';
import { Controller } from './Controller';
import * as settings from './settings';
import { Client } from './Client';

export const App = () => {
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
    <Container maxWidth="sm">
      {client ? (
        isConnected ? (
          <>
            <Controller onChange={(v) => client?.setPulse(v)} />
            <Button onClick={() => client.disconnect()}>
              Disconnect
            </Button>
          </>
        ) : (
          <CircularProgress />
        )
      ) : (
        <ConnectForm onSubmit={handleSubmit} />
      )}
    </Container>
  );
};
