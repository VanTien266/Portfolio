import React from 'react';
import { Card } from '@mui/material';

function BodyCard(props) {
  const { children } = props;
  return (
    <Card
      sx={{
        background: 'rgba( 255, 255, 255, 0.1)',
        backdropFilter: 'blur(4px)',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        border: '1px solid #9BA3EB',
        borderRadius: '20px',
        height: '75vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
      {children}
    </Card>
  );
}

export default BodyCard;
