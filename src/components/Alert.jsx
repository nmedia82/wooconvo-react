import { useState } from "react";
import { Box, Alert, AlertTitle, Button } from "@mui/material";

function ShowAlert({ message, type, onCloseAlert }) {
  return (
    <Box sx={{ width: "90%" }}>
      <Alert severity={type} variant="filled" onClose={onCloseAlert}>
        <AlertTitle>Success</AlertTitle>
        {message}
      </Alert>
    </Box>
  );
}

export default ShowAlert;
