import React from 'react'
import { useState, useEffect } from "react";
import DraftsIcon from '@mui/icons-material/Drafts';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import {Avatar,ListItemButton,ListItemText,ListItemAvatar,Typography,Divider,ListItem} from '@mui/material';
import { pink,blue, lime,red } from "@mui/material/colors";
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import App from '../App';


function Grid_L() {
  const [isShowing, setisShowing] = useState(false);
  const [checked, setChecked] = React.useState(false);
 
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  
  return (
    <div>

      {/* Unread */}
         <ListItemButton sx={{pb:3 , mt:2}}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: pink[500] }}>
            <DraftsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
        primary={
            <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              variant="h6"
              color="text.primary"
            >
              Unread
            </Typography>
        </React.Fragment>
        } />
      </ListItemButton>
      
      {/* Orders */}
      <ListItemButton  sx={{pb:2}}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <DraftsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={
            <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              variant="h6"
              color="text.primary"
            >
              Orders
            </Typography>
        </React.Fragment>
        }  />
      </ListItemButton>
       
       {/* Starred */}
      <ListItemButton sx={{pb:3 , mt:2}}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: lime[500] }}>
            <StarBorderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={
            <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              variant="h6"
              color="text.primary"
            >
              Starred
            </Typography>
        </React.Fragment>
        }  />
      </ListItemButton>
      <Divider />
      
      {/* Settings */}
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: red[500] }}>
            <SettingsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={
            <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              variant="h6"
              color="text.primary"
            >
              Settings
            </Typography>
        </React.Fragment>
        } />
         <FormControlLabel 
         control={<Switch color="warning" checked={checked} onChange={handleChange} onClick={() => setisShowing(!isShowing)} />}
          />
      {isShowing &&(
      <Box sx={{ display: 'inline' }}>
        <Fade in={checked}><Typography
              sx={{ display: "inline" }}
              variant="h6"
              color="text.primary"
            >
            <App />
            </Typography></Fade>
      </Box>
      )}
      </ListItem>
      
     
    
    </div>
    
  )
}

export default Grid_L