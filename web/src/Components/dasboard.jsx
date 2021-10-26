import {useFormik} from 'formik';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import './style.css';
import { useState, useEffect } from "react"
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { red,blue } from '@mui/material/colors';
import { Box } from '@mui/system';
const dev = 'http://localhost:8000';
const baseURL = window.location.hostname.split(':')[0] === 'localhost' ? dev : ""

function Dashboard(){
    const formik = useFormik({
        initialValues:{
            post: ''
        },
        onSubmit: onSubmitFunction
    })
    function onSubmitFunction(values){
        axios.post(`${baseURL}/api/v1/createpost`,{
          post: values.post
        })
        .then(res=>{
          alert('Post Created Successfully');
        })
        .catch((err)=>{
          alert('Some thing went wrong please try with different Post');
        })
    }
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(`${baseURL}/api/v1/dashboard`)
        	.then(res=>{
                console.log(res.data)
                setUsers(res.data)
        });
    }, []);
        // function deleteHandle(id){
        //     console.log(id)
        //     axios.get(`${baseURL}/api/v1/delete`,{
        //         dltId: id            
        //     })
        //     .then(res=>{
        //         if(res.data.dltId){
        //             alert('delete data');    
        //         }
        //     })
        //     .catch(err=>{
        //         alert('some thing error in delete data');
        //     })
        // }  


    return(
        <div className="dashboard">
            <Grid container spacing={2} alignItems="center" textAlign='center' padding='2%' justifyContent="center">
                <Grid item xs={11} sm={10} md={9} lg={8}>
                    <h1 style={{color: "purple"}}> Create New Post </h1>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            color="secondary"
                            id="outlined-basic"
                            label="Post"
                            variant="standard"
                            type = "TextField"
                            name="post"
                            value={formik.values.post}
                            onChange={formik.handleChange}

                            error={formik.touched.post && Boolean(formik.errors.post)}
                            helperText={formik.touched.post && formik.errors.post}
                        />
                        <br /><br />
                        <Button  variant="contained" color="secondary" type="submit">Post</Button>
                    </form>
                </Grid>
            </Grid>
            {users.map(eachUser => {
                return <>
                    <Grid container spacing={2} alignItems="center" marginTop='1%' justifyContent="center">
                        <Grid item xs={11} sm={10} md={9} lg={8}>
                            <TableContainer elevation={3} component={Paper}>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell component="th" align="left" scope="row">
                                                {eachUser.post}
                                            </TableCell>
                                            {/* <TableCell align="left">{eachUser.post}</TableCell> */}
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Grid>
                                    <ThumbUpIcon sx={{ color: blue[500]}}/><FavoriteIcon sx={{ color: red[600],paddingLeft:'10%' }}/><ShareIcon sx={{ color: blue[600],paddingLeft:'10%' }}/><DeleteIcon sx={{ color: red[600],paddingLeft:'10%' }}/><EditIcon sx={{ color: blue[600],paddingLeft:'10%' }}/>
                                </Grid>
                                {/* <Button variant="contained" onClick={()=>deleteHandle(eachUser._id)}>Delete</Button> */}
                            </TableContainer>
                        </Grid>
                    </Grid>
                </>
            })}
        </div>
    )
}

export default Dashboard;