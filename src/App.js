import { useState, useEffect } from "react";
import { getAdminMeta } from "./common/modalService";
import { Box, Grid, Divider } from "@mui/material";
import Unreads_Item from "./components/Unreads";
import Orders_Item from "./components/Orders";
import LeftMenu from "./components/LeftMenu";
import Admin from "./pages/Admin";
import "./App.css";

window.WOOCONVO_API_URL = "https://code.najeebmedia.com/wp-json/wooconvo/v1";

function App() {
  const [Meta, setMeta] = useState([]);
  const [MenuChecked, setMenuChecked] = useState("unread");

  useEffect(() => {
    const loadData = async () => {
      var { data: meta } = await getAdminMeta();
      const { success, data } = meta;
      if (!success) return alert("Error while loading admin settings");
      console.log(JSON.parse(data));
      setMeta(JSON.parse(data));
    };
    loadData();
  }, []);

  const handleMenuChange = (menu) => {
    setMenuChecked(menu);
  };
  return (
    <Box sx={{ flexGrow: 1, mt: 2, ml: 2 }} className="wooconvo-admin-wrapper">
      <Grid container spacing={2}>
        <Grid xs={4}>
          {/* Add Left list Items */}
          <LeftMenu onMenuChange={handleMenuChange} />
        </Grid>
        <Grid xs={8}>
          {/* Unread ==> UnreadMessages */}
          {MenuChecked === "unread" && <Unreads_Item />}

          {/* Orders ==> Orders*/}
          {MenuChecked === "orders" && <Orders_Item />}

          {/* Starred ==> StarredOrders */}
          {MenuChecked === "starred" && <Orders_Item />}
          <Divider />

          {/*  Settings hardcode */}
          {MenuChecked === "settings" && <Admin Meta={Meta} />}
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
