import React from "react";
import {
  Avatar,
  Badge,
  Divider,
  Grid,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import {
  InboxOutlined,
  MarkEmailUnreadOutlined,
  StarRateOutlined,
} from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import ExtensionIcon from "@mui/icons-material/Extension";
import { pink, blue, lime, red } from "@mui/material/colors";
import pluginData from "../services/pluginData";

const { context } = pluginData;

function LeftMenu({ onMenuChange, Orders }) {
  const canSeeSettings = () => {
    return context === "wp_admin";
  };

  const TotalOrders = Orders.length;
  let TotalUnread;
  if (context === "myaccount") {
    TotalUnread = Orders.reduce(
      (accum, item) => accum + item.unread_customer,
      0
    );
  } else {
    TotalUnread = Orders.reduce((accum, item) => accum + item.unread_vendor, 0);
  }
  const TotalStarred = Orders.reduce(
    (accum, item) => accum + item.is_starred,
    0
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ListItemButton sx={{ pb: 2 }} onClick={() => onMenuChange("orders")}>
          <ListItemAvatar>
            <Badge badgeContent={TotalOrders} color="secondary">
              <Avatar sx={{ bgcolor: blue[500] }}>
                <InboxOutlined />
              </Avatar>
            </Badge>
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography variant="h6" color="text.primary">
                  All
                </Typography>
              </React.Fragment>
            }
          />
        </ListItemButton>
      </Grid>

      <Grid item xs={12}>
        <ListItemButton sx={{ pb: 2 }} onClick={() => onMenuChange("unread")}>
          <ListItemAvatar>
            <Badge badgeContent={TotalUnread} color="secondary">
              <Avatar sx={{ bgcolor: pink[500] }}>
                <MarkEmailUnreadOutlined />
              </Avatar>
            </Badge>
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography variant="h6" color="text.primary">
                  Unread
                </Typography>
              </React.Fragment>
            }
          />
        </ListItemButton>
      </Grid>

      <Grid item xs={12}>
        <ListItemButton sx={{ pb: 2 }} onClick={() => onMenuChange("starred")}>
          <ListItemAvatar>
            <Badge badgeContent={TotalStarred} color="secondary">
              <Avatar sx={{ bgcolor: lime[500] }}>
                <StarRateOutlined />
              </Avatar>
            </Badge>
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography variant="h6" color="text.primary">
                  Starred
                </Typography>
              </React.Fragment>
            }
          />
        </ListItemButton>
      </Grid>

      {canSeeSettings() && (
        <>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <ListItemButton
              sx={{ pb: 2 }}
              onClick={() => onMenuChange("settings")}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: red[500] }}>
                  <SettingsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography variant="h6" color="text.primary">
                      Settings
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </Grid>

          <Grid item xs={12}>
            <ListItemButton
              sx={{ pb: 2 }}
              onClick={() => onMenuChange("addons")}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[500] }}>
                  <ExtensionIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography variant="h6" color="text.primary">
                      Addons
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default LeftMenu;
