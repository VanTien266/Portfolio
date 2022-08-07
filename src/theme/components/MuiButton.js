export default {
  styleOverrides: {
    root: {
      textTransform: 'none',
      '&:hover': {
        backdropFilter: 'blur(4px)',
        borderRadius: '10px'
      },
      color: '#fff'
    },
    contained: {
      boxShadow:
        '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
      backgroundColor: '#FFFFFF'
    },
    text: {
      padding: '8px 12px'
    }
  }
};
