import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Input from "../fields/input";
import Grid from "@mui/material/Unstable_Grid2";

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
  const [Value, setValue] = useState(0);

  const handleTabChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleMetaChange = (e, meta) => {
    console.log(e, meta);
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
          value={Value}
          onChange={handleTabChange}
          aria-label="basic tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {Meta.map((meta, index) => (
            <Tab key={index} label={meta.tab} {...a11yProps(index)} />
          ))}
        </Tabs>

        {Meta.map((meta, index) => (
          <TabPanel value={Value} index={index} key={index}>
            {console.log(index)}
            <Grid container spacing={1}>
              {meta.fields.map((field, index2) => (
                <Grid xs={4} key={index2}>
                  <Input
                    meta={field}
                    test={index}
                    onMetaChange={handleMetaChange}
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
