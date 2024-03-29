import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Input from "../fields/input";
import Grid from "@mui/material/Grid";
import { blue } from "@mui/material/colors";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Alert, Button, Link } from "@mui/material";
import ShowAlert from "./Alert";
import { isProInstalled } from "../services/modalService";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function Admin({ Meta, Settings, onSettingSave, openAlert, onCloseAlert }) {
  const [TabData, setTabData] = useState(0);
  const [AdminMeta, setAdminMeta] = useState([]);
  const [pluginSettings, setPluginSettings] = useState({ ...Settings });

  useEffect(() => {
    const meta = Meta.filter((m) => !m.is_addon);
    setAdminMeta(meta);
  }, [Meta]);

  const handleTabChange = (e, newTabData) => {
    setTabData(newTabData);
  };

  const handleMetaChange = (e, field) => {
    const value = field.type === "boolean" ? e.target.checked : e.target.value;
    const saved_meta = { ...pluginSettings, [field.id]: value };
    setPluginSettings(saved_meta);
    console.log(saved_meta);
  };

  return (
    <div>
      <Box
        sx={{
          // flexGrow: 1,
          bgcolor: "background.paper",
          // display: "flex",
          height: "auto",
        }}
      >
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Tabs
              // orientation="vertical"
              variant="standard"
              value={TabData}
              onChange={handleTabChange}
              aria-label="basic tabs"
              indicatorColor="secondary"
              textColor="inherit"
            >
              {AdminMeta.map((meta, index) => (
                <Tab key={index} label={meta.tab} {...a11yProps(index)} />
              ))}
            </Tabs>
          </Toolbar>
        </AppBar>

        {AdminMeta.map((meta, index) => (
          <TabPanel value={TabData} index={index} key={index}>
            <Grid container spacing={1}>
              {meta.fields.map((field, index2) => (
                <Grid item md={field.width} key={index2}>
                  <Input
                    meta={field}
                    onMetaChange={handleMetaChange}
                    data={pluginSettings}
                  />
                </Grid>
              ))}
            </Grid>
            <Button
              sx={{
                textAlign: "center",
                width: "80px",
                mt: 5,
                mb: 3,
                marginLeft: "400px",
              }}
              color="primary"
              variant="contained"
              onClick={() => onSettingSave(pluginSettings)}
            >
              Save
            </Button>
            {openAlert && (
              <ShowAlert
                message="Changes are saved"
                type="success"
                onCloseAlert={onCloseAlert}
              />
            )}
            {!isProInstalled() && (
              <Alert severity="info">
                Please install OrderConvo PRO version to unlock disabled fields.{" "}
                <Link href="https://najeebmedia.com/wooconvo">Get PRO</Link>
              </Alert>
            )}
          </TabPanel>
        ))}
      </Box>
    </div>
  );
}

export default Admin;
