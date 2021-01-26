import { Button, Input } from '@material-ui/core';
import React from 'react';
import { getDeviceId } from './settings';

interface Props {
  onSubmit: (value: string) => void;
}
export const ConnectForm = ({ onSubmit }: Props) => {
  const [value, setValue] = React.useState(getDeviceId());
  const handleSubmit = () => {
    value && onSubmit(value);
    return;
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Input
        value={value || ''}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit">Connect</Button>
    </form>
  );
};
