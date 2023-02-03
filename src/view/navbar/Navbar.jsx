import { AppBar, Toolbar, Typography } from "@material-ui/core"
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  //   const [mode, setMode] = React.useState('light');
  // const colorMode = React.useMemo(
  //   () => ({
  //     toggleColorMode: () => {
  //       console.log('toggleColorMode')
  //       setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  //     },
  //   }),
  //   [],
  // );

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode],
  // );

    const goHome = () => {
        navigate('/')
    }
  
    return (
        <div>
            <AppBar position="sticky" >
                <Toolbar variant='dense'>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }} onClick={goHome}>
                    Home
                </Typography>
                {/* <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton> */}
                </Toolbar>
            </AppBar>
       </div>
        
    )
}

export default Navbar