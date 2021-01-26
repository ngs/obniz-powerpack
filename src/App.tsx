import React from 'react';
import { CircularProgress, Container } from '@material-ui/core';
import { ConnectForm } from './ConnectForm';
import { Controller } from './Controller';
import * as settings from './settings';
import { Client } from './client';

export const App = () => {
  const [deviceId, setDeviceId] = React.useState('');
  const [client, setClient] = React.useState<Client | null>(null);
  const [isConnected, setConnected] = React.useState(false);
  const handleSubmit = (value: string) => {
    setDeviceId(value);
    settings.setDeviceId(value);
    const client = new Client(value);
    client.onOpen = () => {
      setConnected(true);
    };
    client.connect();
    setClient(client);
  };
  return (
    <Container maxWidth="sm">
      {deviceId ? (
        isConnected ? (
          <Controller
            deviceId={deviceId}
            onChange={(v) => client?.setPulse(v)}
          />
        ) : (
          <CircularProgress />
        )
      ) : (
        <ConnectForm onSubmit={handleSubmit} />
      )}
    </Container>
  );
};
