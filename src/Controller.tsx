import React from 'react';
import { Box, Slider } from '@material-ui/core';

interface Props {
  onChange: (value: number) => void;
}

export const Controller = ({ onChange }: Props) => {
  const [value, setValue] = React.useState(0);
  return (
    <Box>
      <Slider
        value={value}
        max={1000}
        onChangeCommitted={() => onChange(value)}
        onChange={(_e, newValue) => setValue(newValue as number)}
      />
    </Box>
  );
};
