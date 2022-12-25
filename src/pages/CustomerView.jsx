import { useState } from "react";
import UnreadOrders from "./../components/UnreadOrders";
import AllOrders from "./../components/AllOrders";
import StarredOrders from "./../components/StarredOrders";
import LeftMenu from "./../components/LeftMenu";
import Admin from "./../components/Admin";
import { Box, Tabs, Tab, Typography, AppBar, Toolbar } from "@mui/material";
import { get_setting } from "../services/helper";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 1 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
function CustomerView({ Orders, onStarred }) {
  const [TabData, setTabData] = useState(0);

  const handleTabChange = (e, newTabData) => {
    setTabData(newTabData);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", height: "auto", width: "100%" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: get_setting("bg_color_top_header") }}
      >
        <Toolbar>
          <Tabs
            variant="standard"
            value={TabData}
            onChange={handleTabChange}
            aria-label="basic tabs"
            indicatorColor={{ color: get_setting("bg_color_top_header") }}
            textColor="inherit"
          >
            <Tab label="All Orders" {...a11yProps(0)} />
            <Tab label="Unread" {...a11yProps(1)} />
            <Tab label="Starred" {...a11yProps(2)} />
          </Tabs>
        </Toolbar>
      </AppBar>

      <TabPanel value={TabData} index={0}>
        <AllOrders Orders={Orders} onStarred={onStarred} />
      </TabPanel>
      <TabPanel value={TabData} index={1}>
        <UnreadOrders Orders={Orders} onStarred={onStarred} />
      </TabPanel>
      <TabPanel value={TabData} index={2}>
        <StarredOrders Orders={Orders} onStarred={onStarred} />
      </TabPanel>
    </Box>
  );
}

export default CustomerView;
