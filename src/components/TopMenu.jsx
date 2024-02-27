import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Divider,
  Grid,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Typography,
  Tab,
  Tabs,
} from "@mui/material";
import {
  InboxOutlined,
  MarkEmailUnreadOutlined,
  StarRateOutlined,
} from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import ExtensionIcon from "@mui/icons-material/Extension";
import pluginData from "../services/pluginData";

const { context } = pluginData;

function TopMenu({ onMenuChange, Orders }) {
  const [tabIndex, setTabIndex] = useState(0);

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

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    switch (newValue) {
      case 0:
        onMenuChange("orders");
        break;
      case 1:
        onMenuChange("unread");
        break;
      case 2:
        onMenuChange("starred");
        break;
      case 3:
        onMenuChange("settings");
        break;
      case 4:
        onMenuChange("addons");
        break;
      default:
        break;
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All" icon={<InboxOutlined />} />
          <Tab label="Unread" icon={<MarkEmailUnreadOutlined />} />
          <Tab label="Starred" icon={<StarRateOutlined />} />
          {canSeeSettings() && <Tab label="Settings" icon={<SettingsIcon />} />}
          {canSeeSettings() && <Tab label="Addons" icon={<ExtensionIcon />} />}
        </Tabs>
      </Grid>

      {/* Render content based on selected tab */}
      <Grid item xs={12}>
        {tabIndex === 0 && (
          <ListItemButton sx={{ pb: 2 }} onClick={() => onMenuChange("orders")}>
            {/* Content for "All" tab */}
          </ListItemButton>
        )}
        {tabIndex === 1 && (
          <ListItemButton sx={{ pb: 2 }} onClick={() => onMenuChange("unread")}>
            {/* Content for "Unread" tab */}
          </ListItemButton>
        )}
        {tabIndex === 2 && (
          <ListItemButton
            sx={{ pb: 2 }}
            onClick={() => onMenuChange("starred")}
          >
            {/* Content for "Starred" tab */}
          </ListItemButton>
        )}
        {tabIndex === 3 && canSeeSettings() && (
          <ListItemButton
            sx={{ pb: 2 }}
            onClick={() => onMenuChange("settings")}
          >
            {/* Content for "Settings" tab */}
          </ListItemButton>
        )}
        {tabIndex === 4 && canSeeSettings() && (
          <ListItemButton sx={{ pb: 2 }} onClick={() => onMenuChange("addons")}>
            {/* Content for "Addons Settings" tab */}
          </ListItemButton>
        )}
      </Grid>
    </Grid>
  );
}

export default TopMenu;
