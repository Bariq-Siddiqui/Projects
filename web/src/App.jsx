
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import Login from './Components/login';
// import Signup from './Components/signup';
// import Dashboard from './Components/dasboard';
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Appbar from './Components/appbar';
// import {
//   Switch,
//   Route,
//   useHistory
// } from "react-router-dom";
// import Grid from '@mui/material/Grid';
import React from "react";
function App(){
  // let history = useHistory();
    return(
      <div className="App">
        {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='secondary'>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
            <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Project
            </Typography>
            <Button color="inherit" onClick={()=> {history.push('/dashboard') }}>Dashboard</Button>
            <Button color="inherit" onClick={()=> {history.push('/signup')} }>Signup</Button>
            <AccountCircleIcon style={{font:'2rem'}} onClick={()=> {history.push('/login') }}/>
          </Toolbar>
        </AppBar>
      </Box>
      <Switch>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Signup />
        </Route>
      </Switch> */}
      <Appbar/>
      {/* <Grid container padding="1rem" fontWeight='500' paddingLeft='6%' bgcolor='#1976d2' color='white'>
        Copyright ?? 2021 Bariq Portfolio
      </Grid> */}
    </div>
  )
}
export default App;