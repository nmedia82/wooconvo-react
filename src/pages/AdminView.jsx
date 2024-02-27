import UnreadOrders from "../components/UnreadOrders";
import AllOrders from "../components/AllOrders";
import StarredOrders from "../components/StarredOrders";
import LeftMenu from "../components/LeftMenu";
import Admin from "../components/Admin";
import { Grid } from "@mui/material";
import AddonSettings from "../components/AddonSettings";
import TopMenu from "../components/TopMenu";
import MenuContainer from "../components/MenuContainer";
function AdminView({
  Orders,
  Meta,
  pluginSettings,
  onStarred,
  onRead,
  onUnRead,
  onSettingSave,
  showAlert,
  onCloseAlert,
  onMenuChange,
  MenuChecked,
}) {
  return (
    <Grid container spacing={2}>
      {/* MenuContainer for small screens */}
      <Grid item xs={12} md={3}>
        <MenuContainer onMenuChange={onMenuChange} Orders={Orders} />
      </Grid>

      {/* Main content for medium and larger screens */}
      <Grid item xs={12} md={9}>
        {/* Unread ==> UnreadMessages */}
        {MenuChecked === "unread" && (
          <UnreadOrders Orders={Orders} onStarred={onStarred} />
        )}

        {/* Orders ==> Orders*/}
        {MenuChecked === "orders" && (
          <AllOrders
            Orders={Orders}
            onStarred={onStarred}
            onRead={onRead}
            onUnRead={onUnRead}
          />
        )}

        {/* Starred ==> StarredOrders */}
        {MenuChecked === "starred" && (
          <StarredOrders Orders={Orders} onStarred={onStarred} />
        )}

        {/* Main Settings hardcode */}
        {MenuChecked === "settings" && (
          <Admin
            Meta={Meta}
            Settings={pluginSettings}
            onSettingSave={onSettingSave}
            openAlert={showAlert}
            onCloseAlert={onCloseAlert}
          />
        )}

        {/* Addon Settings hardcode */}
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
