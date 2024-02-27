import {
  Chip,
  Box,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  TextField,
} from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { ArrowBack, UnfoldLess } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { get_setting, get_translation } from "../../services/helper";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: get_setting("bg_color_message_header", "#000"),
    },
  },
});

const enable_revisions = get_setting("enable_revisions");

function NavBar({
  TotalCount,
  onCollapsed,
  showMore,
  onSearchThread,
  OrderID,
  onBack,
  RevisionLimit,
}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Toolbar sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="back"
              onClick={onBack}
              sx={{ color: "#fff", mr: 2 }}
            >
              <ArrowBack />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                flexGrow: 1,
                alignItems: "center",
              }}
            >
              <Chip
                label={`${get_translation("__wc_order", "Order")} #${OrderID}`}
                variant="outlined"
                sx={{ mr: 5, color: "#fff" }}
              />

              {get_setting("enable_msg_count_display") && (
                <Chip
                  label={`${get_translation(
                    "__wc_total_messages",
                    "Total Messages"
                  )}: ${TotalCount}`}
                  variant="outlined"
                  sx={{ color: "white" }}
                />
              )}

              {enable_revisions && (
                <Chip
                  label={`${get_translation(
                    "__wc_revisions_left",
                    "Revisions Left"
                  )}: ${RevisionLimit - TotalCount}/${RevisionLimit}`}
                  variant="outlined"
                  sx={{ color: "white", marginLeft: "5px" }}
                />
              )}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {get_setting("enable_msg_search") && (
              <TextField
                sx={{ bgcolor: "white" }}
                label={get_translation("__wc_search", "Search")}
                size="small"
                variant="filled"
                id="margin-none"
                onChange={(e) => onSearchThread(e.target.value)}
                InputProps={{ disableUnderline: true }}
              />
            )}
            <IconButton
              onClick={() => onCollapsed(!showMore)}
              size="small"
              edge="end"
              color="inherit"
              aria-label="toggle view"
              sx={{ ml: 2 }}
            >
              {showMore ? <UnfoldLess /> : <UnfoldMoreIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;
