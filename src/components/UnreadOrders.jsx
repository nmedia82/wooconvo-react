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

function UnreadOrders({ Orders }) {
  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}`,
    };
  }

  return (
    <div>
      {Orders.map(
        ({
          order_id,
          thread,
          unread_vendor,
          first_name,
          last_name,
          order_date,
          is_starred,
        }) => (
          <ListItem key={order_id}>
            <ListItemAvatar>
              <Badge badgeContent={unread_vendor} color="primary">
                <Avatar
                  sx={{ bgcolor: pink[500] }}
                  {...stringAvatar(first_name)}
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
                    {`#${order_id} ${first_name} ${last_name}`}
                  </Typography>
                </React.Fragment>
              }
              secondary={order_date}
            />
            <Box>
              <Rating name="customized-10" defaultValue={is_starred} max={1} />
            </Box>
            <IconButton>
              <ArrowForwardIosOutlinedIcon color="primary" />
            </IconButton>
          </ListItem>
        )
      )}
    </div>
  );
}

export default UnreadOrders;
