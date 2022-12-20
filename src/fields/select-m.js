import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
const SelectMaterial = ({ meta, onMetaChange, value }) => {
  return (
    <div className="wcforce-field-wrapper">
      <FormControl fullWidth>
        <InputLabel id={`label-${meta.id}`}>{meta.label}</InputLabel>
        <Select
          labelId={`label-${meta.id}`}
          name={meta.name}
          id={meta.name}
          className="wcmore-input"
          label={meta.label}
          onChange={(e) => onMetaChange(e, meta)}
          value={value}
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
