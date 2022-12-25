import React from "react";
import DraftsIcon from "@mui/icons-material/Drafts";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SettingsIcon from "@mui/icons-material/Settings";
import ExtensionIcon from "@mui/icons-material/Extension";
import {
  Avatar,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Typography,
  Divider,
  ListItem,
} from "@mui/material";
import { pink, blue, lime, red } from "@mui/material/colors";
import pluginData from "../services/pluginData";

const { context } = pluginData;

function LeftMenu({ onMenuChange }) {
  const [checked, setChecked] = React.useState(false);

  const canSeeSettings = () => {
    return context === "wp_admin";
  };

  return (
    <div>
      {/* Orders */}
      <ListItemButton sx={{ pb: 2 }} onClick={() => onMenuChange("orders")}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: blue[500] }}>
            <LocalMallIcon />
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
                Orders
              </Typography>
            </React.Fragment>
          }
        />
      </ListItemButton>

      {/* Unread */}
      <ListItemButton
        sx={{ pb: 3, mt: 2 }}
        onClick={() => onMenuChange("unread")}
      >
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
          }
        />
      </ListItemButton>

      {/* Starred */}
      <ListItemButton
        sx={{ pb: 3, mt: 2 }}
        onClick={() => onMenuChange("starred")}
      >
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: lime[500] }}>
            <StarBorderIcon />
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
                Starred
              </Typography>
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider />

      {/* Settings */}
      {canSeeSettings() && (
        <ListItemButton sx={{ pb: 2 }} onClick={() => onMenuChange("settings")}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: red[500] }}>
              <SettingsIcon />
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
                  Settings
                </Typography>
              </React.Fragment>
            }
          />
        </ListItemButton>
      )}

      {/* Add-ons Settings */}
      {canSeeSettings() && (
        <ListItemButton sx={{ pb: 2 }} onClick={() => onMenuChange("addons")}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: blue[500] }}>
              <ExtensionIcon />
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
                  Addons Settings
                </Typography>
              </React.Fragment>
            }
          />
        </ListItemButton>
      )}
    </div>
  );
}

export default LeftMenu;
