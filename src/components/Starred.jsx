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
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Send";
import MailIcon from "@mui/icons-material/Mail";
import { brown } from "@mui/material/colors";
function Starred() {
  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}`,
    };
  }

  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            sx={{ bgcolor: brown[500] }}
            {...stringAvatar("Labeeb Ahmad")}
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
                Labeeb Ahmad
              </Typography>
            </React.Fragment>
          }
          secondary="Oct 19, 2023"
        />

        <Box sx={{ pr: "50px" }}>
          <Rating
            name="customized-10"
            defaultValue={1}
            max={1}
            sx={{ pr: "10px" }}
          />
          <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
          </Badge>
        </Box>
      </ListItem>
    </div>
  );
}

export default Starred;
