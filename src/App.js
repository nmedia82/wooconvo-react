import { useState, useEffect } from "react";
import { getAdminMeta } from "./services/modalService";
import { Box, Grid, Divider } from "@mui/material";
import UnreadOrders from "./components/UnreadOrders";
import AllOrders from "./components/AllOrders";
import StarredOrders from "./components/StarredOrders";
import LeftMenu from "./components/LeftMenu";
import Admin from "./pages/Admin";
import "./App.css";
import { getOrders } from "./services/modalService";

window.WOOCONVO_API_URL = "https://code.najeebmedia.com/wp-json/wooconvo/v1";

function App() {
  const [Orders, setOrders] = useState([]);
  const [Meta, setMeta] = useState([]);

  const [MenuChecked, setMenuChecked] = useState("unread");

  useEffect(() => {
    const loadData = async () => {
      var { data: meta } = await getAdminMeta();
      const { success, data } = meta;
      if (!success) return alert("Error while loading admin settings");
      // console.log(JSON.parse(data));
      setMeta(JSON.parse(data));

      const { data: orders } = await getOrders("vendor");
      setOrders(orders.data);
    };
    loadData();
  }, []);

  const handleMenuChange = (menu) => {
    setMenuChecked(menu);
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
          <Grid xs={4}>
            {/* Add Left list Items */}
            <LeftMenu onMenuChange={handleMenuChange} />
          </Grid>
          <Grid xs={8}>
            {/* Unread ==> UnreadMessages */}

            {MenuChecked === "unread" && <UnreadOrders />}

            {/* Orders ==> Orders*/}
            {MenuChecked === "orders" && <AllOrders Orders={Orders} />}

            {/* Starred ==> StarredOrders */}
            {MenuChecked === "starred" && <StarredOrders />}
            <Divider />

            {/*  Settings hardcode */}
            {MenuChecked === "settings" && <Admin Meta={Meta} />}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
