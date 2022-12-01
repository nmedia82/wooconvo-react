import {
  FormControl,
  TextField,
  Tooltip,
  InputAdornment,
  FormHelperText,
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
      {/* <input
        type="text"
        name={meta.name}
        id={meta.name}
        placeholder={meta.label}
        className="wooconvo-input"
        onChange={(e) => onMetaChange(e, meta)}
        value={meta.value}
      />
      <br />
      <small>{meta.desc}</small> */}
    </div>
  );
};

export default Text;
