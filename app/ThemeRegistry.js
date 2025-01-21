'use client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00FF94', // Neon Green
      light: '#33FFA8',
      dark: '#00CC77',
    },
    secondary: {
      main: '#FF2E63', // Neon Pink
      light: '#FF5785',
      dark: '#CC244F',
    },
    background: {
      default: '#0A0A0F', // Very dark blue-black
      paper: '#13131A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    error: {
      main: '#FF4444',
    },
    warning: {
      main: '#FFB800',
    },
    info: {
      main: '#00D1FF',
    },
    success: {
      main: '#00FF94',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
      letterSpacing: 0.5,
    },
    h5: {
      fontWeight: 600,
      letterSpacing: 0.5,
    },
    subtitle1: {
      fontWeight: 500,
      letterSpacing: 0.3,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(19, 19, 26, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#13131A',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, rgba(0,255,148,0) 0%, rgba(0,255,148,0.3) 50%, rgba(0,255,148,0) 100%)',
          },
        },
        elevation1: {
          boxShadow: '0 4px 20px rgba(0, 255, 148, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#13131A',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          '&:hover': {
            boxShadow: '0 8px 25px rgba(0, 255, 148, 0.15)',
            transform: 'translateY(-2px)',
            transition: 'all 0.3s ease-in-out',
            '&:before': {
              opacity: 1,
            },
          },
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, rgba(0,255,148,0) 0%, rgba(0,255,148,0.5) 50%, rgba(0,255,148,0) 100%)',
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          backgroundColor: 'rgba(0, 255, 148, 0.1)',
          border: '1px solid rgba(0, 255, 148, 0.2)',
          '&:hover': {
            backgroundColor: 'rgba(0, 255, 148, 0.2)',
          },
        },
        label: {
          color: '#00FF94',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 255, 148, 0.1)',
          border: '1px solid rgba(0, 255, 148, 0.2)',
          color: '#00FF94',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(0, 255, 148, 0.1)',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(0, 255, 148, 0.05)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255, 255, 255, 0.05)',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          },
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
} 