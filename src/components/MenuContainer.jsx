import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import LeftMenu from "./LeftMenu";
import TopMenu from "./TopMenu";

function MenuContainer({ onMenuChange, Orders }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid container spacing={2}>
      {matches ? (
        // LeftMenu for medium and larger screens
        <Grid item md={3}>
          <LeftMenu onMenuChange={onMenuChange} Orders={Orders} />
        </Grid>
      ) : (
        // TopMenu for small screens
        <Grid item xs={12}>
          <TopMenu onMenuChange={onMenuChange} Orders={Orders} />
        </Grid>
      )}
    </Grid>
  );
}

export default MenuContainer;
