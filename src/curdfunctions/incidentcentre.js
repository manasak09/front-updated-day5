import { useState,useEffect } from "react";
import { connect } from "react-redux";
import { addInjury,findAllInjueries } from "../action/actionfun";
import {useNavigate} from 'react-router-dom'
import { Button, Input } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { Box, height } from "@mui/system";


function AddIncident(props){

    const [incidentName,setIncidentName]=useState('')
    const [anyInjuries,setAnyInjuries]=useState('')
    const [injuryDescription,setInjuryDescription]=useState('')
    const [incidentError, setIncidentError] = useState('')
    const [injuryError, setInjuryError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')


    return(
    <>
    <Box

sx={{
    display: 'centre',
    flexWrap: 'wrap',
    '& > :not(style)': {
      m: 1,
      marginTop:20,
      width: 350,
      height: 620,
      marginLeft:10
      
    },
  }}
    ><Paper elevation={5}>Entries</Paper></Box>
    <Box 
    sx={{
        display: 'centre',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          marginTop:-65,
          width: 1000,
          height: 620,
          marginLeft:60
        },
      }}
    >
    <Paper elevation={5} >

    <div class = "heading" style = {{position:"relative",marginLeft:350,marginRight:0,top:0}}>
    <h1>Incident Centre</h1></div>

    {/* <form onSubmit={(e)=>{
e.preventDefault()
        var injury={
            "personName": personName,
            "personAddress": personAddress,
            "injuryDate":date,
            "mobileNo": mobileNo
        }

        props.mydispatch(addInjury(injury))
        console.log(injury)
    }}> */}


    <div class = "injury-form" style = {{position:"relative",marginLeft:350,marginRight:0,top:0}}>
        <label>Enter Incident</label><br/>
        <input type = 'text' 
         onChange={
             (e)=>{
             let nam = e.target.value

            if (nam.length < 4 || nam.length >= 20) {
              setIncidentError('name should be more than 4 charatcters')
            } 
            else 
            {
                setIncidentName(e.target.value)
                setIncidentError('')
            }
        }}/>

        <span style = {{ color: 'red'}} > {incidentError } </span><br/>
    </div>

    <div class = "injury-form" style = {{position:"relative",marginLeft:350,marginRight:0,top:0}}>
        <label>Any Injuries (Yes/No)</label><br/>
        <input type = 'text' 
        onChange={
            (e)=>{ let add = e.target.value
                var addexp = String(add).toLowerCase().match("^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s)$")
                if (addexp || add <= 200 || add == null) {
                    setInjuryError('address is mandatory ')
                } else {
                    setAnyInjuries(e.target.value)
                    setInjuryError('')
                }
        }}/>


        <span style = {{ color: 'red'}} > { injuryError } </span><br/>
    </div>


    <div class = "injury-form" style = {{position:"relative",marginLeft:350,marginRight:0,top:0}}>
        <label>Injury Description</label><br/>
        <input type = 'text' 
         onChange={
             (e)=>{
             let nam = e.target.value

            if (nam.length < 4 || nam.length >= 200) {
                setDescriptionError('name should be more than 4 charatcters')
            } 
            else 
            {
                setInjuryDescription(e.target.value)
                setInjuryError('')
            }
        }}/>

        <span style = {{ color: 'red'}} > { descriptionError } </span><br/>
    </div>

    
    <Button style = {{position:"relative",marginLeft:350,marginRight:0,top:0}}>

    <Input type = 'submit' onClick={()=>{var injury={
            "incidentName": incidentName,
            "anyInjuries": anyInjuries,
            "injuryDescription":injuryDescription,
        }

        props.mydispatch(AddIncident(injury))
        console.log(injury)
    }}

     value='Add' ></Input>

    </Button>

    <br/>
    <Link to='/home/injurycentre/view' style = {{position:"relative",marginLeft:350,marginRight:0,top:0}}><Button variant='contained'>View</Button></Link>
    <Link to='/home/updateinjury/update'><Button variant='contained'>Update</Button></Link>
         <Outlet/>
         </Paper>
         </Box>
</>)

    
   
}

const mapDispatchToProps = dispatch => ({
    mydispatch: dispatch
})
const mapStateToProps = state => ({
    data: state
})

export default connect(mapStateToProps, mapDispatchToProps)(AddIncident);

