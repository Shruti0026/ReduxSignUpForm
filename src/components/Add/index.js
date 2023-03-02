import React from "react";
import { Grid } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { useSelector , useDispatch} from "react-redux";
import {useState} from "react";
import {addUsers} from "../../Features/Users"
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from "../Home";
import { userSelector } from "../../Features/Users";


const paperStyle = { padding: 20, height: '50vh', width: 300, margin: "20px auto" }
const stylePaper ={padding: 20, height: 'auto', width: 450, margin: "20px auto" }
const avatarStyle = { backgroundColor: '#1bbd7e' }
const btnstyle = { margin: '8px 0' }


function AddUser() {
    const dispatch = useDispatch();
    const userList = useSelector((state)=> userSelector.selectAll(state))

    const [username , setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");


    const Navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addUsers({ 
            id: userList[userList.length -1].id+1,
            username,
            email,
            password,
        }))
        Navigate('/Home')
        console.log(addUsers)
       
    }
    <Routes>
        <Route path="/Home" element={<Home />} />
    </Routes>



    return ( 
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField id="standard-basic" label="Username" placeholder='Enter username' fullWidth required variant="standard" 
                 onChange={(event)=>{setUsername(event.target.value)
                }}/>
                <TextField id="standard-basic" label="Email" placeholder='Enter email id' fullWidth required variant="standard"
                 onChange={(event)=>{setEmail(event.target.value)
                 }}/>
                <TextField id="standard-basic" label="Password" placeholder='Enter password' type='password' fullWidth required variant="standard" 
                onChange={(event)=>{setPassword(event.target.value)
                }}/>
                    
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} 
                onClick={handleSubmit} fullWidth>Sign in</Button>
                
            </Paper>
                 
        </Grid>


    )
}

export default AddUser;