import { FormControlLabel, FormGroup, InputLabel, Switch } from "@mui/material";

const Boolean = ({ meta, onMetaChange, value }) => {
  value = value === "" ? false : value;
  return (
    <div className="wcforce-field-wrapper">
      <FormGroup>
        <InputLabel id={`label-${meta.id}`}>{meta.label}</InputLabel>
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
