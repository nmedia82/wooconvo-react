import * as React from "react";
import { ListItemAvatar, Avatar, ListItemIcon, Tooltip } from "@mui/material/";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import SendIcon from "@mui/icons-material/Send";
export default function QuickReplyPopup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton color="primary" sx={{ p: 1 }} onClick={handleClickOpen}>
        <QuickreplyIcon />
      </IconButton>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
        <AppBar color="secondary" sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Quick Reply's
            </Typography>
          </Toolbar>
        </AppBar>
        <List sx={{ width: "100%", bgcolor: "background.paper", mt: "20px" }}>
          <ListItem>
            <ListItemText primary="Ok Admin Now You See." />

            {/* Send icon With tooltip */}
            <ListItemIcon>
              <Tooltip title="Send Message" arrow placement="top-start">
                <IconButton sx={{ color: "#1976d2" }}>
                  <SendIcon />
                </IconButton>
              </Tooltip>
            </ListItemIcon>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Thank U So Much" />

            {/* Send icon With tooltip */}
            <ListItemIcon>
              <Tooltip title="Send Message" arrow placement="top-start">
                <IconButton sx={{ color: "#1976d2" }}>
                  <SendIcon />
                </IconButton>
              </Tooltip>
            </ListItemIcon>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="My Pleasure Anytime" />

            {/* Send icon With tooltip */}
            <ListItemIcon>
              <Tooltip title="Send Message" arrow placement="top-start">
                <IconButton sx={{ color: "#1976d2" }}>
                  <SendIcon />
                </IconButton>
              </Tooltip>
            </ListItemIcon>
          </ListItem>
          <Divider />
        </List>
      </Dialog>
    </div>
  );
}
