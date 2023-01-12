import { Tooltip, IconButton, ListItemText } from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";

const Select = ({ meta, onMetaChange }) => {
  return (
    <div className="wcforce-field-wrapper">
      <ListItemText
        sx={{ display: "inline-flex" }}
        primary={meta.title}
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
      <select
        name={meta.name}
        id={meta.name}
        placeholder={meta.title}
        className="wcmore-input"
        onChange={(e) => onMetaChange(e, meta)}
        value={meta.value}
      >
        {meta.options.map((option) => (
          <option key={option.toString()} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
      <small>{meta.detail}</small>
    </div>
  );
};

export default Select;
