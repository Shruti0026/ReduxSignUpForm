import React, { useEffect }  from "react";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles'
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { tableCellClasses } from "@mui/material/TableCell";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector , useDispatch} from "react-redux";
import { deleteUser } from "../../Features/Users";
import {Routes, Route, useNavigate} from 'react-router-dom';
import AddUser from "../Add";
import { purple } from "@mui/material/colors";


const paperStyle = { float:'center',padding: "20px 20px 20px 20px", height: 'auto', width: 800, backgroundColor: purple[50], margin: "20px auto"}
// const stylePaper ={padding: 20, height: 'auto', width: 450, margin: "20px auto" }
const avatarStyle = { backgroundColor: '#1bbd7e' }
const btnstyle = { float: 'left', width: 200 , margin: "40px 15px 50px 40px"}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function Home() {
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const userList = useSelector((state)=> state.users.value)

    const tableRows = userList.map((info, id ) => {
        return ( 
            
            <StyledTableRow >
                <StyledTableCell align = "center" > { info.id }</StyledTableCell> 
                <StyledTableCell align = "center" > { info.username  } </StyledTableCell> 
                <StyledTableCell align = "center" > { info.email  } </StyledTableCell> 
                <StyledTableCell align = "center" > { info.password } </StyledTableCell>  
                <StyledTableCell onClick={()=>{
                    dispatch(deleteUser({id: info.id}))
                }}  > 
                        <Avatar style = { avatarStyle } >
                        <DeleteForeverIcon/>
                        </Avatar> 
                </StyledTableCell > 
            </StyledTableRow>
        );
    });

    
  
    const routeChange=()=>{
      Navigate('/AddUser');
       
    }

    return ( 
       
        <Grid className="table">
            <Paper style={paperStyle}>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={routeChange}>Add User</Button>
                <Routes>
                    <Route path="/AddUser" element={<AddUser />} />
                </Routes>
               
                    <Grid item xs width = { 750 } marginLeft = { 5 } >
                    <TableContainer component = { Paper } style = {{ margin: 'auto', marginTop: 50 , }} >
                        <Table sx = {{ minWidth: 500 }} aria-label = "customized table" >
                            <TableHead >
                                <TableRow>
                                    <StyledTableCell > S.No </StyledTableCell> 
                                    <StyledTableCell align = "center" > Username </StyledTableCell> 
                                    <StyledTableCell align = "center" > Email </StyledTableCell> 
                                    <StyledTableCell align = "center" > Password </StyledTableCell>
                                    <StyledTableCell align = "center" > Delete </StyledTableCell> 
                                </TableRow > 
                            </TableHead>
                        <TableBody> { tableRows } </TableBody>
                        </Table > 
                    </TableContainer> 
                    </Grid >
            </Paper>
            
        </Grid>
       


    )
}

export default Home;