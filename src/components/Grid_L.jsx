import React from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import {Avatar,ListItemButton,ListItemText,ListItemAvatar,Typography,Divider} from '@mui/material';
import { pink,blue, lime,red } from "@mui/material/colors";

function Grid_L() {
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
      <ListItemButton>
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
        }  />
      </ListItemButton>
    </div>
    
  )
}

export default Grid_L