import axios from 'axios';
import './style.css';
import {useFormik} from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import {
  useHistory
} from "react-router-dom";
const dev = 'http://localhost:8000';

const baseURL = window.location.hostname.split(':')[0] === 'localhost' ? dev : ""
function Signup() {
  let history = useHistory();
  const formik = useFormik({
    initialValues:{
      fullName: '',
      email: '',
      password:'',
      address:''
    },
    onSubmit: onSubmitFunction
  });
  function onSubmitFunction(values){
    axios.post(`${baseURL}/api/v1/signup`,{
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      address: values.address
    })
    .then(res=>{
      alert('SignUp Successfull');
      history.push('/login');
    })
    .catch((err)=>{
      alert('Some thing went wrong please try with different email');
    })
  }
  return (
    <div className="signup">
      <Grid container spacing={2} alignItems="center" textAlign='center' padding='2%' justifyContent="center">
                <Grid item xs={11} sm={10} md={9} lg={8}>
      <h1 style={{color: "purple"}}>  SIGN UP </h1>
       <form onSubmit={formik.handleSubmit}>
        {/* <Stack spacing={3}> */}
          <TextField
            fullWidth
            color="secondary"
            id="outlined-basic"
            label="Full Name"
            variant="standard"

            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}

            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />

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
            >
            

          </TextField>
          <TextField
            fullWidth
            color="secondary"
            id="filled-basic"
            label="Address"
            variant="standard"
            type="address"

            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}

            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          /> <br /><br />

          <Button  variant="contained" color="secondary" type="submit">Sign Up</Button>
        {/* </Stack> */}
      </form>
      </Grid></Grid>
      
    </div>
  );
}

export default Signup;
