import { useState, useEffect } from "react";
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
} from "@mui/material";
import { pink } from "@mui/material/colors";
import OrderThread from "./OrderThread/OrdrerThread";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
function Starred({ Orders, onStarred }) {
  const [selectedOrder, setselectedOrder] = useState(null);
  const [Starred, setStarred] = useState([]);
  useEffect(() => {
    // starred
    const starred_orders = Orders.filter((order) => order.is_starred);
    setStarred(starred_orders);
  }, [Orders]);
  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}`,
    };
  }

  return (
    <div>
      {!selectedOrder &&
        Starred.map(
          ({
            order_id,
            unread_vendor,
            first_name,
            last_name,
            order_date,
            is_starred,
          }) => (
            <ListItem key={order_id}>
              <ListItemAvatar>
                <Badge badgeContent={unread_vendor} color="primary">
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
                  setselectedOrder(Orders.find((o) => o.order_id === order_id))
                }
              >
                <ArrowForwardIosOutlinedIcon color="primary" />
              </IconButton>
            </ListItem>
          )
        )}
      {selectedOrder && (
        <OrderThread
          Order={selectedOrder}
          onBack={() => setselectedOrder(null)}
        />
      )}
    </div>
  );
}

export default Starred;
