import * as React from "react";
//import { useState } from "react";
import { Box, Grid, Divider } from "@mui/material";
import Unreads_Item from "../components/Unreads";
import Orders_Item from "../components/Orders";
import Grid_L from "../components/LeftMenu";

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, mt: 2, ml: 2 }}>
      <Grid container spacing={2}>
        <Grid xs={4}>
          {/* Add Left list Items */}
          <Grid_L />
        </Grid>
        <Grid xs={8}>
          {/* Unread */}
          <Unreads_Item />

          {/* Orders */}
          <Orders_Item />

          {/* Starred */}
          <Orders_Item />
          <Divider />

          {/*  Settings hardcode */}
        </Grid>
      </Grid>
    </Box>
  );
}
