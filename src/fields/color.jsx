import { Label } from "@mui/icons-material";
import {
  FormControl,
  TextField,
  Tooltip,
  IconButton,
  ListItemText,
} from "@mui/material";

import HelpIcon from "@mui/icons-material/Help";
const ColorPicker = ({ meta, onMetaChange, value }) => {
  return (
    <div className="wooconvo-field-wrapper">
      <FormControl fullWidth>
        <ListItemText
          sx={{ display: "inline-flex" }}
          primary={meta.label}
          secondary={
            <Tooltip
              sx={{ marginTop: "-8px" }}
              title={meta.desc}
              placement="right-start"
            >
              <IconButton>
                <HelpIcon color="primary" fontSize="small" />
              </IconButton>
            </Tooltip>
          }
        />
        {/* <FormLabel>{meta.label}</FormLabel> */}
        <TextField
          name={meta.name}
          id={meta.name}
          type="color"
          variant="standard"
          value={value}
          onChange={(e) => onMetaChange(e, meta)}
          disabled={meta.is_disabled}
        />
      </FormControl>
    </div>
  );
};

export default ColorPicker;
