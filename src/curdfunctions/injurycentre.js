import { Button, List } from "@mui/material";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addInjury, findAllInjueries } from "../action/actionfun";
import { Outlet } from "react-router-dom";
import { Divider } from "@mui/material";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SystemUpdateIcon from '@mui/icons-material/SystemUpdate';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Avatar from '@mui/material/Avatar';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { deepOrange, green } from '@mui/material/colors';
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import SystemUpdate from "@mui/icons-material/SystemUpdate";
function AddInjury(props) {

    return(
    <div>
 <div style={{position:'relative',top:200,left:300}}>
        
        <List sx={{width:100}}>
        
        
               <Link to='/home/injurycentre/view'><input type='button' data-testid="viewctrl" 
               style={{color:'black',backgroundColor:'#00C9A7',height:30,width:60}} value='View'></input></Link>
               <Avatar sx={{left:70,top:-33}} variant="rounded">
        <AssignmentIcon />     
      </Avatar>
      
               <br></br>
               
               <Link to='/home/injurycentre/update'><input type='button'
               style={{color:'black',backgroundColor:'#00C9A7',height:30,width:60}}
               data-testid="updatectrl" 
               value='Update'></input></Link>
               <Avatar sx={{ left:70,top:-33}} variant="rounded">
        <SystemUpdate/>
      </Avatar>
              <Link to='/home/injurycentre/addinjuryfom'><input type='button' value='ADDForm'/></Link>
              
               </List>
              
        </div>

       
<div style={{position:'relative',left:300}}><Outlet/></div> 

        
   
    
   
        </div>)

}
    const mapDispatchToProps = dispatch => ({
        mydispatch: dispatch
    })
    const mapStateToProps = state => ({
        data: state
    })

    export default connect(mapStateToProps, mapDispatchToProps)(AddInjury)