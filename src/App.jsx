import './App.css';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react'
import Router from './Router';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App(pros) {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (  
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
