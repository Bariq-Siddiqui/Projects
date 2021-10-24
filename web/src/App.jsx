
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Login from './Components/login';
import Signup from './Components/signup';
import Dashboard from './Components/dasboard';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import bar from './images/bar.png';
import bar from './Components/images/bar.png';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
function App(){
  let history = useHistory();
    return(
    <div className="App">
       <Box sx={{ flexGrow: 1 }}>
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
                        {/* <Button color="inherit" onClick={()=> {history.push('/login') }}>Login</Button> */}
                        {/* <Avatar alt="Bariq Siddiqui" src={bar} /> */}
                        {/* <DashboardIcon onClick={()=> {history.push('/dashboard') }}/>
                        <NoAccountsIcon onClick={()=> {history.push('/signup')} }/> */}
                        <AccountCircleIcon style={{font:'2rem'}} onClick={()=> {history.push('/login') }}/>

                    </Toolbar>
                </AppBar>
      {/* <AppBar position="static">
        <Toolbar>
          <Button variant="h6" component="div" onClick={()=> history.push('/')}>
            MERN project
          </Button>
          <Button color="inherit" onClick={()=> {history.push('/signup')} }>Signup</Button>
          <Button color="inherit" onClick={()=> {history.push('/login') }}>Login</Button>
          <Button color="inherit" onClick={()=> {history.push('/dashboard') }}>Dashboard</Button>
        </Toolbar>
      </AppBar> */}
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
      </Switch>
    </div>
   
  )
  
}
export default App;