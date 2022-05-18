import logo from './logo.svg';
import './App.css';
import pic1 from './images/smiley.png'
import { AppBar, colors, IconButton, Paper, SwipeableDrawer, Toolbar, Typography } from '@mui/material';
import { Outlet,Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { deepPurple, red, teal} from '@mui/material/colors';
import { Avatar} from '@mui/material';
import pic from './images/safety.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider  from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';


import ErrorBoundry from './errorboundary';
import {useNavigate} from 'react-router-dom';
import { blue } from '@material-ui/core/colors';



import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';





import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailIcon from '@mui/icons-material/Mail';
import { Margin } from '@mui/icons-material';
import { padding } from '@mui/system';
import injurycentre from './curdfunctions/injurycentre';

const drawerWidth = 240;



const theme=createTheme({
  palette:{
      primary:{
      main:blue[700]
              },
  text:{
      primary:deepPurple[50]
       }
          }

              })
                      

function App() {

  let navigate=useNavigate()
  var user=sessionStorage.getItem('username')
  if(user!=null){
  console.log(user)

 
  
  return (<>
  

  <ThemeProvider theme={theme}>
    <AppBar postion ='fixed' >
      <Toolbar >
      


      <Link to='/home/'><Avatar alt="image" src={pic} sx={{ marginLeft:-1.5 }}/></Link>
      
         
         <Typography textAlign="center" variant="h5"
          sx={{flex:1}}>Safety Management System</Typography>

<Link to='/home/injurycentre'><Button variant='contained'style={{margin:7}}>Injury Centre</Button></Link>
          
         
          <Link to='/home/incidentcentre'><Button variant='contained'style={{margin:7}}>Incident Centre</Button></Link>
          
          
          <Link to='/home/reports'><Button variant='contained'style={{margin:7}}>Pre-Defined Action</Button></Link> 

          <Link to='/home/reports'><Button variant='contained'style={{margin:7}}>Request Action</Button></Link> 

          <Link to='/home/reports'><Button variant='contained'style={{margin:7}}>Reports</Button></Link> 
          
          <br/>

          
          <Avatar  >{user .slice(0,2).toUpperCase()}</Avatar>
         
        <Button variant='conatined' onClick={()=>{
                  sessionStorage.clear()
                  navigate("/")
                }}>Logout</Button>
        
      </Toolbar>

      
    </AppBar>
    <Box style={{position : "fixed"}}>
      <CssBaseline />
      

      <Drawer 
        variant="permanent"
        sx={{
          width: 100,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 60, marginTop:8,},
        }}
      >
        <Toolbar />
        <Box sx={{ marginTop:-7, marginLeft:-1,}}>
              <ListItem>
                <ListItemButton>
                   <ListItemIcon>
                   <Link to='/home/injurycentre'><Avatar 
                      sx={{ marginLeft:-1, bgcolor: 'black',width: 30, height: 30 }}><AssignmentIndIcon sx={{ fontSize: 20}} /> <br/> </Avatar></Link>
                   </ListItemIcon>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton>
                   <ListItemIcon>
                   <Link to='/home/incidentcentre'><Avatar sx={{ marginLeft:-1,bgcolor: 'black',width: 30, height: 30  }}> <AllInboxIcon sx={{ fontSize: 20}}/> <br/> </Avatar></Link>
                   </ListItemIcon>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton>
                   <ListItemIcon>
                   <Link to='/home/reports'><Avatar sx={{ marginLeft:-1,bgcolor: 'black',width: 30, height: 30  }}><AccessibleForwardIcon sx={{ fontSize: 20}} /><br/> </Avatar></Link>
                   </ListItemIcon>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton>
                   <ListItemIcon>
                   <Avatar sx={{ marginLeft:-1,bgcolor: 'black',width: 30, height: 30  }}><BookmarkAddedIcon sx={{ fontSize: 20}}/> <br/> </Avatar> 
                   </ListItemIcon>
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton>
                   <ListItemIcon>
                   <Avatar sx={{ marginLeft:-1,bgcolor: 'black',width: 30, height: 30  }}><AssessmentIcon sx={{ fontSize: 20}}/> <br/> </Avatar> 
                   </ListItemIcon>
                </ListItemButton>
              </ListItem>


        </Box>

      </Drawer>
      

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    
    </Box>
    </ThemeProvider>
    <ErrorBoundry>
  <Outlet/>
  </ErrorBoundry>

  </>
 
  );
              }
              else{<>
                return <h1>You have not logeed in!!</h1>
                {/* <Avatar alt='image' src={pic1} style={{postion:'relative'}}></Avatar> */}
                </>
              }
}

export default App;
