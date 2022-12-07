import {
  FormControl,
  TextField,
  Tooltip,
  InputAdornment,
  FormHelperText,
  Box,
  Item,
} from "@mui/material";

const Text = ({ meta, onMetaChange }) => {
  return (
    <div className="wooconvo-field-wrapper">
      <TextField
        name={meta.name}
        id={meta.name}
        label={meta.label}
        type="text"
        variant="outlined"
      />
    </div>
  );
};

export default Text;
