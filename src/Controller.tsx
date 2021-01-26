import React from 'react';
import { Grid, Button, Slider } from '@material-ui/core';

interface Props {
  onChange: (value: number) => void;
  onDisconnect: () => void;
}

export const Controller = ({ onChange, onDisconnect }: Props) => {
  const [value, setValue] = React.useState(0);
  return (
    <Grid container spacing={2} direction="column">
      <Grid item lg>
        <Slider
          value={value}
          max={1000}
          onChangeCommitted={() => onChange(value)}
          onChange={(_e, newValue) => setValue(newValue as number)}
        />
      </Grid>
      <Grid item lg>
        <Button onClick={onDisconnect}>Disconnect</Button>
      </Grid>
    </Grid>
  );
};
