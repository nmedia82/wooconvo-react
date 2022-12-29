import UnreadOrders from "../components/UnreadOrders";
import AllOrders from "../components/AllOrders";
import StarredOrders from "../components/StarredOrders";
import LeftMenu from "../components/LeftMenu";
import Admin from "../components/Admin";
import { Grid, Divider } from "@mui/material";
import AddonSettings from "../components/AddonSettings";
function AdminView({
  Orders,
  Meta,
  pluginSettings,
  onStarred,
  onSettingSave,
  showAlert,
  onCloseAlert,
  onMenuChange,
  MenuChecked,
}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        {/* Add Left list Items */}
        <LeftMenu onMenuChange={onMenuChange} Orders={Orders} />
      </Grid>
      <Grid item xs={9}>
        {/* Unread ==> UnreadMessages */}

        {MenuChecked === "unread" && (
          <UnreadOrders Orders={Orders} onStarred={onStarred} />
        )}

        {/* Orders ==> Orders*/}
        {MenuChecked === "orders" && (
          <AllOrders Orders={Orders} onStarred={onStarred} />
        )}

        {/* Starred ==> StarredOrders */}
        {MenuChecked === "starred" && (
          <StarredOrders Orders={Orders} onStarred={onStarred} />
        )}

        {/*  Main Settings hardcode */}
        {MenuChecked === "settings" && (
          <Admin
            Meta={Meta}
            Settings={pluginSettings}
            onSettingSave={onSettingSave}
            openAlert={showAlert}
            onCloseAlert={onCloseAlert}
          />
        )}

        {/*  Addon Settings hardcode */}
        {MenuChecked === "addons" && (
          <AddonSettings
            Meta={Meta}
            Settings={pluginSettings}
            onSettingSave={onSettingSave}
            openAlert={showAlert}
            onCloseAlert={onCloseAlert}
          />
        )}
      </Grid>
    </Grid>
  );
}

export default AdminView;
