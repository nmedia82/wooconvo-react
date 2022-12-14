import React from "react";
import {
  Box,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItem,
  Rating,
  Badge,
  IconButton,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Send";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { pink } from "@mui/material/colors";

function UnreadOrders() {
  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}`,
    };
  }

  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Badge badgeContent={5} color="primary">
            <Avatar
              sx={{ bgcolor: pink[500] }}
              {...stringAvatar("Najeeb Ahmad")}
            />
          </Badge>
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
            </React.Fragment>
          }
          secondary="Oct 9, 2023"
        />
        <Box>
          <Rating name="customized-10" defaultValue={1} max={1} />
        </Box>
        <IconButton>
          <ArrowForwardIosOutlinedIcon color="primary" />
        </IconButton>
      </ListItem>
    </div>
  );
}

export default UnreadOrders;
