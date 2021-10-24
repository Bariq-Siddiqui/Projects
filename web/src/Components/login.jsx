import axios from 'axios';
import './style.css';
import Grid from '@mui/material/Grid';
import {useFormik} from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
    useHistory
} from 'react-router-dom';
const dev = 'http://localhost:8000';
const baseURL = window.location.hostname.split(':')[0] === 'localhost' ? dev : ""
function Login(){
  let history = useHistory();
    const formik = useFormik({
        initialValues:{
            email: '',
            password: ''
          },
          onSubmit: onSubmitFunction
    })
    function onSubmitFunction(values){
        axios.post(`${baseURL}/api/v1/login`,{
            email: values.email,
            password: values.password
        })
        .then(res=>{
            if(res.data.email){
                alert('login successfull');
                history.push('/dashboard');
                // history.push('/login');

            }
           
        })
        .catch(err=>{
            alert('login unsuccessfull error found');
        })
    }
    return(
        <div className="login">
            <Grid container spacing={2} alignItems="center" textAlign='center' padding='2%' justifyContent="center">
                <Grid item xs={11} sm={10} md={9} lg={8}>
            <h1 style={{color: "purple"}}> LOG IN </h1>



       <form onSubmit={formik.handleSubmit}>
        {/* <Stack spacing={3}> */}
          <TextField
            fullWidth
            color="secondary"
            id="outlined-basic"
            label="Email"
            variant="standard"
            type = "email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}

            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            color="secondary"
            type="password"
            id="filled-basic"
            label="Password"
            variant="standard"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}

            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            />
            <br /><br />
          <Button  variant="contained" color="secondary" type="submit">Log in</Button>
        {/* </Stack> */}
        </form>
        </Grid>
        </Grid>
        </div>
    )
}

export default Login;