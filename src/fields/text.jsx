import {
  FormControl,
  TextField,
  Tooltip,
  IconButton,
  ListItemText,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
const Text = ({ meta, onMetaChange, value }) => {
  value = value ? value : meta.default;
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
        <TextField
          name={meta.name}
          id={meta.name}
          //label={meta.label}
          type="text"
          variant="outlined"
          value={value}
          onChange={(e) => onMetaChange(e, meta)}
          disabled={meta.is_disabled}
        />
      </FormControl>
    </div>
  );
};

export default Text;
