import {
  FormControlLabel,
  FormGroup,
  InputLabel,
  Switch,
  Tooltip,
  IconButton,
  ListItemText,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

const Boolean = ({ meta, onMetaChange, value }) => {
  value = value === "" ? false : value;
  return (
    <div className="wcforce-field-wrapper">
      <FormGroup>
        <ListItemText
          id={`label-${meta.id}`}
          sx={{ display: "inline-flex" }}
          primary={meta.label}
          secondary={
            <Tooltip
              sx={{ marginTop: "-8px" }}
              title="More Info"
              placement="right-start"
            >
              <IconButton>
                <HelpIcon color="primary" fontSize="small" />
              </IconButton>
            </Tooltip>
          }
        />
        {/* <InputLabel id={`label-${meta.id}`}>{meta.label}</InputLabel> */}
        <Switch
          checked={value}
          onChange={(e) => onMetaChange(e, meta)}
          inputProps={{
            "aria-label": "controlled",
            name: meta.name,
            id: meta.id,
          }}
        />
      </FormGroup>
    </div>
  );
};

export default Boolean;
