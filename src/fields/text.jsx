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
  value = value ? value : meta.default;
  return (
    <div className="wooconvo-field-wrapper">
      <FormControl fullWidth>
        <TextField
          name={meta.name}
          id={meta.name}
          label={meta.label}
          type="text"
          variant="outlined"
          value={value}
          onChange={(e) => onMetaChange(e, meta)}
        />
      </FormControl>
    </div>
  );
};

export default Text;
