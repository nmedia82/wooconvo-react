import { useState } from "react";
import {
  Box,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItem,
  Rating,
  Badge,
  IconButton,
  Divider,
} from "@mui/material";
import OrderThread from "./orderthread/OrdrerThread";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { pink } from "@mui/material/colors";
import pluginData from "../services/pluginData";
import Pusher from "pusher-js";
const { context } = pluginData;

function AllOrders({ Orders, onStarred }) {
  const [selectedOrder, setselectedOrder] = useState(null);

  function stringAvatar(name) {
    const firstInitial = name ? name.trim().split(" ")[0][0] : "-";
    return { children: firstInitial };
  }

  return (
    <div>
      {!selectedOrder &&
        Orders.map(
          ({
            order_id,
            unread_vendor,
            unread_customer,
            first_name,
            last_name,
            order_date,
            is_starred,
          }) => (
            <div key={order_id}>
              <ListItem>
                <ListItemAvatar>
                  <Badge
                    badgeContent={
                      context === "myaccount" ? unread_customer : unread_vendor
                    }
                    color="primary"
                  >
                    <Avatar
                      sx={{ bgcolor: pink[500] }}
                      {...stringAvatar(first_name)}
                    />
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        variant="h6"
                        color="text.primary"
                      >
                        {`#${order_id} ${first_name} ${last_name}`}
                      </Typography>
                    </>
                  }
                  secondary={order_date}
                />
                <Box>
                  <IconButton onClick={() => onStarred(order_id, is_starred)}>
                    <Rating
                      name="customized-10"
                      value={is_starred}
                      readOnly
                      max={1}
                    />
                  </IconButton>
                </Box>
                <IconButton
                  onClick={() =>
                    setselectedOrder(
                      Orders.find((o) => o.order_id === order_id)
                    )
                  }
                >
                  <ArrowForwardIosOutlinedIcon color="primary" />
                </IconButton>
              </ListItem>
              <Divider />
            </div>
          )
        )}
      {selectedOrder && (
        <OrderThread
          Order={selectedOrder}
          onBack={() => setselectedOrder(null)}
        />
      )}
      {Orders.length === 0 && (
        <Box
          sx={{
            display: "flex",
            minHeight: "25vh",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          <Typography variant="h4" component="h3">
            No orders found
          </Typography>
        </Box>
      )}
    </div>
  );
}

export default AllOrders;
