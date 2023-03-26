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
import { Button } from "@mui/material";
import ShowAlert from "./Alert";

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

function AddonSettings({
  Meta,
  Settings,
  onSettingSave,
  openAlert,
  onCloseAlert,
}) {
  const [TabData, setTabData] = useState(0);
  const [AdminMeta, setAdminMeta] = useState([]);
  const [pluginSettings, setPluginSettings] = useState({ ...Settings });

  useEffect(() => {
    const meta = Meta.filter((m) => m.is_addon);
    setAdminMeta(meta);
  }, [Meta]);

  const handleTabChange = (e, newTabData) => {
    setTabData(newTabData);
  };

  const handleMetaChange = (e, field) => {
    var value = "";
    const { type } = field;
    if (type === "boolean") {
      value = e.target.checked;
    } else if (type === "quickreply") {
      value = e;
    } else {
      value = e.target.value;
    }
    const saved_meta = { ...pluginSettings, [field.id]: value };
    setPluginSettings(saved_meta);
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
        <AppBar position="static" color="primary">
          <Toolbar>
            <Tabs
              // orientation="vertical"
              variant="standard"
              value={TabData}
              onChange={handleTabChange}
              aria-label="basic tabs"
              indicatorColor="primary"
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
          </TabPanel>
        ))}
      </Box>
    </div>
  );
}

export default AddonSettings;
