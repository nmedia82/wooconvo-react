import React from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';
import StarBorder from '@mui/icons-material/StarBorder';
import {Avatar,ListItemButton,ListItemText,ListItemAvatar,Typography,Divider} from '@mui/material';

import { pink,blue, lime } from "@mui/material/colors";

function Grid_L() {
  return (
    <div>
         <ListItemButton>
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
      
      <ListItemButton>
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

      <ListItemButton>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: lime[500] }}>
            <StarBorder />
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
      <Divider sx={{ height: 28}} />

      </ListItemButton>

    </div>
    
  )
}

export default Grid_L