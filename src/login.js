import { Button, Paper } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './style.css'

function Login()
{
    const [userId,setUserId] = useState('')
    const [password,setPassword] = useState('')
    const [status,setStatus] = useState('')
    const [message,setMessage]= useState('')
    const [userIdErr,setUserIdErr]= useState('')
    const [passwordErr,setPasswordErr]= useState('')
    const navigate = useNavigate()

    return (<>
    <div class = "container" style = {{position:"relative",marginLeft:200,marginRight:200,top:0}}>
    <h1> Login Page </h1>

            <div class = "form-control">
            <label>Enter User Id</label><br/>

                <input type = 'text' inputProps={{"data-testid":"userId"}} 
                value={userId}
                onChange={(e)=>{


                    setUserId(e.target.value)
                    let id=e.target.value
                    var exp=String(id).toLowerCase().match(/\S+@\S+\.\S+/)
                        if(exp){
                            setUserId(e.target.value)
                            setUserIdErr('')
                        }
                        else{
                            setUserIdErr('email id is not right format')
                        }
                }}/>
                <span style={{color:'red',left:10}}>{userIdErr}</span><br/>
                </div>

                <div class = "form-control">
                <label>Enter Password</label><br/>
                <input type = 'password' inputProps={{"data-testid":"password"}} 
                value={password}
                 onChange={(e)=>{
                    setPassword(e.target.value)
                    let pass=e.target.value
                if(pass.length<3){
                    setPasswordErr('password should be more than 3 characters')
                    // return
                }
                else {
                    setPassword(e.target.value)
                    setPasswordErr('')
                }
                   setPassword(e.target.value)
                }}/>
                <span style={{color:'red',left:10}}>{passwordErr}</span><br/>

                </div>

                <button class = 'btn' onClick={()=>{
                    axios.get(`http://localhost:8081/finduser/${userId}`)
                    .then((res)=>{
                        var data = res.data
                        if(data.role==="admin")
                        {
                            if(data.userEmail===userId && data.password===password)
                            {
                               sessionStorage.setItem("username",data.userEmail)
                               navigate("/home")
                            }
                            else
                            {
                                setStatus("invalid details")
                            }
                        }
                        else if(data.role === "user")
                        {
                            if(data.userEmail===userId && data.password===password)
                            {
                               sessionStorage.setItem("username",data.userEmail)
                               navigate("/home")
                            }
                            else
                            {
                                setStatus("invalid details")
                            }
                        }
                        else
                        {
                            setStatus("Invalid Details")
                        }
                    })
                }}>Sign in</button>
                <p class = 'text'>Don't have an account? <Link to = "/Registration" style={{marginLeft:10,fontSize:18}}>Register</Link></p>
                {status}
                {message}
    </div>
   </>)   
}

export default Login;