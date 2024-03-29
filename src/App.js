import { useState, useEffect } from "react";
import { Box, Backdrop, CircularProgress } from "@mui/material";
import "./App.css";
import {
  getAdminMeta,
  getOrders,
  markMessageRead,
  markMessageUnRead,
  saveSettings,
  setStarred,
  setUnStarred,
} from "./services/modalService";

import useLocalStorage from "./services/useLocalStorage";
import AdminView from "./pages/AdminView";
import FrontendView from "./pages/FrontendView";
import pluginData from "./services/pluginData";

const { context, settings } = pluginData;

let root = document.documentElement;
root.style.setProperty("font-size", "16px");

function App() {
  const [Orders, setOrders] = useState([]);
  const [Meta, setMeta] = useState([]);
  const [pluginSettings, setPluginSettings] = useLocalStorage(
    "wooconvo_settings",
    {}
  );
  const [isWorking, setIsWorking] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [MenuChecked, setMenuChecked] = useState(null);

  const IsAdminView = context === "wp_admin" ? true : false;
  // console.log(context, IsAdminView);

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
      setMenuChecked("orders");

      setPluginSettings(settings);
      setIsWorking(false);
    };
    loadData();
  }, [setPluginSettings]);

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

  const handleRead = async (order_id) => {
    setIsWorking(true);
    const { data: order } = await markMessageRead(order_id);
    const orders = [...Orders];
    const found = orders.find((order) => order.order_id === order_id);
    const index = orders.indexOf(found);
    orders[index] = order.data;
    setOrders(orders);
    setIsWorking(false);
  };

  const handleUnRead = async (order_id) => {
    setIsWorking(true);
    const { data: order } = await markMessageUnRead(order_id);
    const orders = [...Orders];
    const found = orders.find((order) => order.order_id === order_id);
    const index = orders.indexOf(found);
    orders[index] = order.data;
    setOrders(orders);
    setIsWorking(false);
  };

  const handleMenuChange = (menu) => {
    console.log(menu);
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

      <Box sx={{ flexGrow: 1 }} className="wooconvo-admin-wrapper">
        {!IsAdminView && (
          <FrontendView
            Orders={Orders}
            onStarred={handleStarred}
            onRead={handleRead}
            onUnRead={handleUnRead}
          />
        )}
        {IsAdminView && (
          <AdminView
            Meta={Meta}
            Orders={Orders}
            showAlert={showAlert}
            MenuChecked={MenuChecked}
            onCloseAlert={() => setShowAlert(false)}
            onSettingSave={handleSettingSave}
            onStarred={handleStarred}
            onRead={handleRead}
            onUnRead={handleUnRead}
            onMenuChange={handleMenuChange}
            pluginSettings={pluginSettings}
          />
        )}
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
