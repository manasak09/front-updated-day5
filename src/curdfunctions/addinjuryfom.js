import { useState,useEffect } from "react";
import { connect } from "react-redux";
import { addInjury,findAllInjueries } from "../action/actionfun";
import {useNavigate} from 'react-router-dom'
import { Button, Input } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { Box, height } from "@mui/system";


function AddInjury(props){

    const [personName, setPersonName] = useState('')
    const [personAddress, setPersonAddress] = useState('')
        // const[injuryDate,setInjuryDate]=useState('')
    const [mobile, setMobile] = useState('')
    const [nameError, setNameError] = useState('')
    const [addressError, setAddressError] = useState('')
        // const[dateError,setError]=useState('')
    const [mobileError, setMobileError] = useState('')
   
   



    return(<>

    <Box

sx={{
    display: 'centre',
    flexWrap: 'wrap',
    '& > :not(style)': {
      m: 1,
      marginTop:-5,
      width: 350,
      height: 620,
      marginLeft:10
      
    },
  }}
    ><Paper elevation={5}>Entries Returned</Paper>
    
    
    </Box>
    <Box 
    sx={{
        display: 'centre',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          marginTop:-80,
          width: 1000,
          height: 620,
          marginLeft:60
        },
      }}
    >
    <Paper elevation={5} >

    <div class = "heading" style = {{position:"relative",marginLeft:350,marginRight:0,top:0}}>
    <h1>Injury centre</h1></div>

    <div class = "injury-form" style = {{position:"relative",marginLeft:350,marginRight:0,top:0}}>
        <label>Enter Person Name</label><br/>
        <input type = 'text' 
         onChange={
             (e)=>{
             let nam = e.target.value

            if (nam.length < 4 || nam.length >= 20) {
                setNameError('name should be more than 4 charatcters')
            } 
            else 
            {
                setPersonName(e.target.value)
                setNameError('')
            }
        }}/>

        <span style = {{ color: 'red'}} > { nameError } </span><br/>
    </div>

    <div class = "injury-form" style = {{position:"relative",marginLeft:350,marginRight:0,top:0}}>
        <label>Enter Person Address</label><br/>
        <input type = 'text' 
        onChange={
            (e)=>{
                setPersonAddress(e.target.value)
                let add = e.target.value
                var addexp = String(add).toLowerCase().match("^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s)$")
                if (addexp || add <= 200 || add == null) {
                    setAddressError('address is mandatory ')
                } else {
                    setPersonAddress(e.target.value)
                    setAddressError('')
                }
        }}/>


        <span style = {{ color: 'red'}} > { addressError } </span><br/>
    </div>

    <div class = "injury-form" style = {{position:"relative",marginLeft:350,marginRight:0,top:0}} >
        <label>Enter Mobile No.</label><br/>
        <input type = 'text' 
        onChange={(e)=>{ 
            let mob = e.target.value
                var exp = String(mob).match("^(?=.[0-9]).{10}$")
                if (exp || mob.length == 10) {
                    setMobile(e.target.value)
                    setMobileError('')
                } else {
                    setMobileError('Enter valid mobile number')
                }
           
        }}/>
        <span style = {{ color: 'red'}} > { mobileError } </span><br/>

        

    </div>
    <Button style = {{position:"relative",marginLeft:350,marginRight:0,top:0}}>

    <Input type = 'submit' onClick={()=>{var injury={
           //  "injuryId" :injuryId,
           "personName": personName,
           "personAddress": personAddress,
           //  "injuryDate":injuryDate,
           "mobile": mobile
        }

        props.mydispatch(addInjury(injury))
        console.log(injury)
    }}

     value='Add' ></Input>

    </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddInjury);

