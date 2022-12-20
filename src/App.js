import { useState, useEffect } from "react";
import { getAdminMeta } from "./services/modalService";
import { Box, Grid, Divider, Backdrop, CircularProgress } from "@mui/material";
import UnreadOrders from "./components/UnreadOrders";
import AllOrders from "./components/AllOrders";
import StarredOrders from "./components/StarredOrders";
import LeftMenu from "./components/LeftMenu";
import Admin from "./pages/Admin";
import "./App.css";
import { getOrders } from "./services/modalService";
import {
  getSettings,
  saveSettings,
  setStarred,
  setUnStarred,
} from "./common/modalService";

window.WOOCONVO_API_URL = "https://code.najeebmedia.com/wp-json/wooconvo/v1";

function App() {
  const [Orders, setOrders] = useState([]);
  const [Meta, setMeta] = useState([]);
  const [pluginSettings, setPluginSettings] = useState({});
  const [isWorking, setIsWorking] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [MenuChecked, setMenuChecked] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setIsWorking(true);
      var { data: meta } = await getAdminMeta();
      const { success, data } = meta;
      if (!success) return alert("Error while loading admin settings");
      setMeta(JSON.parse(data));

      let { data: orders } = await getOrders();
      orders = orders.data;
      setOrders(orders);
      setMenuChecked("unread");

      // plugin settings
      const { data: settings } = await getSettings();
      setPluginSettings(settings.data);
      setIsWorking(false);
    };
    loadData();
  }, []);

  const handleStarred = async (order_id, is_starred) => {
    setIsWorking(true);
    var { data: order } = is_starred
      ? await setUnStarred(order_id)
      : await setStarred(order_id);
    const orders = [...Orders];
    const found = orders.find((order) => order.order_id === order_id);
    const index = orders.indexOf(found);
    orders[index] = order.data;
    setOrders(orders);
    setIsWorking(false);
  };

  const handleMenuChange = (menu) => {
    setShowAlert(false);
    setMenuChecked(menu);
  };

  const handleSettingSave = async (settings) => {
    setIsWorking(true);
    setShowAlert(false);
    const { data: resp } = await saveSettings(settings);
    setPluginSettings(resp.data);
    setShowAlert(true);
    setIsWorking(false);
  };
  return (
    <div className="wooconvo-admin-wrapper">
      {/* <Admin Meta={Meta} /> */}
      {/* <Admin_react /> */}

      <Box
        sx={{ flexGrow: 1, mt: 2, ml: 2 }}
        className="wooconvo-admin-wrapper"
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            {/* Add Left list Items */}
            <LeftMenu onMenuChange={handleMenuChange} />
          </Grid>
          <Grid item xs={9}>
            {/* Unread ==> UnreadMessages */}

            {MenuChecked === "unread" && (
              <UnreadOrders Orders={Orders} onStarred={handleStarred} />
            )}

            {/* Orders ==> Orders*/}
            {MenuChecked === "orders" && (
              <AllOrders Orders={Orders} onStarred={handleStarred} />
            )}

            {/* Starred ==> StarredOrders */}
            {MenuChecked === "starred" && (
              <StarredOrders Orders={Orders} onStarred={handleStarred} />
            )}
            <Divider />

            {/*  Settings hardcode */}
            {MenuChecked === "settings" && (
              <Admin
                Meta={Meta}
                Settings={pluginSettings}
                onSettingSave={handleSettingSave}
                openAlert={showAlert}
                onCloseAlert={() => setShowAlert(false)}
              />
            )}
          </Grid>
        </Grid>

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isWorking}
          onClick={() => setIsWorking(false)}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </div>
  );
}

export default App;
