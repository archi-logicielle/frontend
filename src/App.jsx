import { useState } from 'react';
import './App.css';
import axios from 'axios';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';
import CodeMirror from '@uiw/react-codemirror';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme,useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CodeCard from './components/CodeCard';



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
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          label
        </Typography>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
      <main><CodeCard/></main> 
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
