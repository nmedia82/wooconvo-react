import { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Collapse,
  ListItemButton,
  IconButton,
  Box,
} from "@mui/material";
//import InfoIcon from "@mui/icons-material/Info";
import { blue, green } from "@mui/material/colors";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { DownloadOutlined } from "@mui/icons-material";
import { get_setting, nl2br, orderconvo_date } from "../../services/helper";

export default function CustomerMsg({ message, showMore, onDownload }) {
  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}`,
    };
  }
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(showMore);
  }, [showMore]);

  const handleClick = () => {
    setOpen(!open);
  };

  const getDisplayName = (msg) => {
    const firstname_only = get_setting("firstname_display");
    const { user_name, first_name } = msg;
    if (firstname_only && first_name) return first_name;
    return user_name;
  };
  return (
    <div>
      <ListItemButton onClick={handleClick}>
        <ListItemAvatar>
          <Avatar
            sx={{
              bgcolor:
                message.user_type === "customer" ? green[600] : blue[600],
            }}
            {...stringAvatar(message.user_name.toUpperCase())}
          />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <>
              <Typography
                sx={{ display: "inline", fontWeight: "bold" }}
                variant="span"
                color="text.primary"
              >
                {getDisplayName(message)}
              </Typography>
              <Typography
                sx={{ display: "inline", ml: 2 }}
                variant="span"
                color="text.primary"
              >
                {orderconvo_date(message.date)}
              </Typography>
            </>
          }
        />

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemText
          sx={{ backgroundColor: get_setting("bg_color_order_messages"), p: 2 }}
        >
          <Typography variant="body1" gutterBottom>
            <div
              style={{ textAlign: "left" }}
              dangerouslySetInnerHTML={{ __html: nl2br(message.message) }}
            />
          </Typography>

          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
            }}
          >
            {message.attachments &&
              message.attachments.map((att, index) => (
                <Box className="preview-thumb-upload" key={index}>
                  <img
                    src={att.thumbnail}
                    className="preview-thumb-img-upload"
                    height="50"
                    width="100"
                    alt={att.filename}
                  />
                  <p className="preview-thumb-tool-upload">
                    <IconButton onClick={() => onDownload(att)}>
                      <DownloadOutlined />
                    </IconButton>
                  </p>
                </Box>
              ))}
          </Box>
        </ListItemText>
      </Collapse>
    </div>
  );
}
