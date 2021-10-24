import axios from 'axios';
import './style.css';
import { useState, useEffect } from "react"
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const dev = 'http://localhost:8000';
const baseURL = window.location.hostname.split(':')[0] === 'localhost' ? dev : ""
function Dashboard(){
        // axios.post(`${baseURL}/api/v1/dashboard`,{})
        // .then(res=>{
        //   alert('SignUp Successfull');
        // })
        // .catch((err)=>{
        //   alert('Some thing went wrong please try with different email');
        // })
        const [users, setUsers] = useState([]);
        // axios.get(`${baseURL}/api/v1/dashboard`)
        // .then(res=>{
        //     console.log(res.data)
        //     setUsers(res.data)
        // });

        useEffect(() => {

            axios.get(`${baseURL}/api/v1/dashboard`)
            	.then(res=>{
                    console.log(res.data)
                    setUsers(res.data)
            });
          }, []);



    return(
        <div className="dashboard">
            {users.map(eachUser => {
                return <>
            <Grid container spacing={2} alignItems="center" marginTop='1%' justifyContent="center">
                <Grid item xs={11} sm={10} md={9} lg={8}>
                    <TableContainer elevation={3} component={Paper}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">Name
                                    </TableCell>
                                    <TableCell align="left">{eachUser.fullName}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Email
                                    </TableCell>
                                    <TableCell align="left">{eachUser.email}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Address
                                    </TableCell>
                                    <TableCell align="left">{eachUser.address}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
                    {/* <h1>{eachUser.fullName}</h1>
                    <h3>{eachUser.email}</h3>
                    <h3>{eachUser.address}</h3> */}
                </>
            })}


        </div>
    )
}

export default Dashboard;