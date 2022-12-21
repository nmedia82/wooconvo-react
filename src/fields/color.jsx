import { Label } from "@mui/icons-material";
import {
  FormControl,
  TextField,
  Tooltip,
  InputAdornment,
  FormHelperText,
  Box,
  Item,
  FormLabel,
} from "@mui/material";

const ColorPicker = ({ meta, onMetaChange, value }) => {
  return (
    <div className="wooconvo-field-wrapper">
      <FormControl fullWidth>
        <FormLabel>{meta.label}</FormLabel>
        <TextField
          name={meta.name}
          id={meta.name}
          type="color"
          variant="standard"
          value={value}
          onChange={(e) => onMetaChange(e, meta)}
        />
      </FormControl>
    </div>
  );
};

export default ColorPicker;
