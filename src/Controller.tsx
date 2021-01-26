import React from 'react';
import { Grid, Button, Slider } from '@material-ui/core';

interface Props {
  onChange: (value: number) => void;
  onDisconnect: () => void;
}

export const Controller = ({ onChange, onDisconnect }: Props) => {
  const [value, setValue] = React.useState(0);
  const stop = () => {
    setValue(0);
    onChange(0);
  };
  return (
    <Grid container spacing={2} direction="column">
      <Grid item lg>
        <Slider
          value={value}
          min={-100}
          max={100}
          onChangeCommitted={() => onChange(value)}
          onChange={(_e, newValue) => setValue(newValue as number)}
        />
      </Grid>
      <Grid item lg>
        <Button onClick={onDisconnect}>Disconnect</Button>
        <Button onClick={stop}>Stop</Button>
      </Grid>
    </Grid>
  );
};
