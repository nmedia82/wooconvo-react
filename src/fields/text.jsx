import {
  FormControl,
  TextField,
  Tooltip,
  InputAdornment,
  FormHelperText,
  Box,
  Item,
} from "@mui/material";

const Text = ({ meta, onMetaChange, value }) => {
  return (
    <div className="wooconvo-field-wrapper">
      <TextField
        name={meta.name}
        id={meta.name}
        label={meta.label}
        type="text"
        variant="outlined"
        value={value}
        onChange={(e) => onMetaChange(e, meta)}
      />
    </div>
  );
};

export default Text;
