import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core"
import React from 'react';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {createTheme } from '@mui/material/styles';

const Navbar = (props) => {
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
        <div>
            <AppBar position="sticky" >
                <Toolbar variant='dense'>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    LOGO
                </Typography>
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                </Toolbar>
            </AppBar>
       </div>
        
    )
}

export default Navbar