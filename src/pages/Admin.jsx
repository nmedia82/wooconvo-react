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

function Admin({ Meta }) {
  const [TabData, setTabData] = useState(0);
  const [AdminMeta, setAdminMeta] = useState([]);
  const [Fields, setFields] = useState([]);
  const [savedMeta, setSavedMeta] = useState({});

  useEffect(() => {
    let fields = [];
    Meta.forEach((m) => {
      fields = [...fields, ...m.fields];
    });
    setFields(fields);
    setAdminMeta(Meta);
  }, [Meta]);

  const handleTabChange = (e, newTabData) => {
    setTabData(newTabData);
  };

  const handleMetaChange = (e, field) => {
    const saved_meta = { ...savedMeta, [field.id]: e.target.value };
    setSavedMeta(saved_meta);
    console.log(saved_meta);
    // const fields = [...Fields];
    // const found = fields.find((f) => f.id === field.id);
    // const index = fields.indexOf(found);
    // fields[index].value = e.target.value;
    // setFields(fields);
  };

  // console.log(Meta);
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
                <Grid item md={3} key={index2}>
                  <Input
                    meta={field}
                    onMetaChange={handleMetaChange}
                    data={savedMeta}
                  />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        ))}
      </Box>
    </div>
  );
}

export default Admin;
