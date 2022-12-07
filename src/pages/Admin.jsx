import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Input from "../fields/input";
import Grid from "@mui/material/Grid";

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
  const [AdminMeta, setAdminMeta] = useState(Meta);

  const handleTabChange = (e, newTabData) => {
    setTabData(newTabData);
  };

  const handleMetaChange = (e, field) => {
    const admin_meta = [...AdminMeta];
    const found = admin_meta.find((f) => f.id === field.id);
    const index = admin_meta.indexOf(found);
    console.log(admin_meta, found, index);
    // admin_meta[index].value = e.target.value;
    // setAdminMeta(admin_meta);
  };

  // console.log(Meta);
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "auto",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          value={TabData}
          onChange={handleTabChange}
          aria-label="basic tabs"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {AdminMeta.map((meta, index) => (
            <Tab key={index} label={meta.tab} {...a11yProps(index)} />
          ))}
        </Tabs>

        {AdminMeta.map((meta, index) => (
          <TabPanel value={TabData} index={index} key={index}>
            <Grid container spacing={2}>
              {meta.fields.map((field, index2) => (
                <Grid item md={4} key={index2}>
                  <Input meta={field} onMetaChange={handleMetaChange} />
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
