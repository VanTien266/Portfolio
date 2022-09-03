export default {
  styleOverrides: {
    root: {
      textTransform: 'none',
      '&:hover': {
        backdropFilter: 'blur(8px)',
        backgroundColor: 'transparent',
      },
      color: '#fff',
    },
    contained: {
      boxShadow:
        '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
      backgroundColor: 'transparent',
    },
    text: {
      padding: '8px 12px',
    },
  },
};
