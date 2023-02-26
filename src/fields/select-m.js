import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
  ListItemText,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
const SelectMaterial = ({ meta, onMetaChange, value }) => {
  return (
    <div className="wcforce-field-wrapper">
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

        <Select
          labelId={`label-${meta.id}`}
          name={meta.name}
          id={meta.name}
          className="wcmore-input"
          label={meta.label}
          onChange={(e) => onMetaChange(e, meta)}
          value={value}
          disabled={meta.is_disabled}
        >
          {meta.options2.map((option) => (
            <MenuItem key={option.key} value={option.key}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectMaterial;
