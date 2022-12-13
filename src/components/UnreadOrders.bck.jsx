import React from "react";
import {
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  TextField,
  Collapse,
  Typography,
  Rating,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { blue } from "@mui/material/colors";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import { common, lime } from "@mui/material/colors";

function UnreadOrders() {
  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}`,
    };
  }

  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemAvatar>
          <Avatar
            alt="Travis Howard"
            sx={{ bgcolor: blue[500] }}
            {...stringAvatar("Najeeb Ahmad")}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                variant="h6"
                color="text.primary"
              >
                Najeeb Ahmad
              </Typography>
              {/* <Typography
                  sx={{ display: "inline", ml: 2 }}
                  variant="body2"
                  color="text.primary"
                >
                  Monday, 7 March 2022.
                </Typography> */}
            </React.Fragment>
          }
          secondary="Jan 9, 2023"
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemButton sx={{ pl: 4 }}>
          <Divider orientation="vertical" flexItem sx={{ mr: 4 }}></Divider>
          <TextField fullWidth id="standard-basic" variant="standard" />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Rating name="customized-10" defaultValue={2} max={1} />
          <IconButton color="primary" sx={{ p: "11px" }} aria-label="Send">
            <SendIcon />
          </IconButton>
        </ListItemButton>
      </Collapse>
    </div>
  );
}

export default UnreadOrders;
