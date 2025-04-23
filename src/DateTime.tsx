import React from 'react';
import Typography from '@mui/material/Typography';

function DateTime() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {`Today's date and time: ${new Date().toLocaleString()}`}
    </Typography>
  );
}

export default DateTime;