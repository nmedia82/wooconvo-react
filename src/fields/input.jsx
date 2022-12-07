import Text from "./text";
import Boolean from "./boolean";
import "./input.css";
import Select from "./select";
import SelectMaterial from "./select-m";
import { _to_options } from "../common/helper";

const Input = ({ meta, onMetaChange, data }) => {
  const value = data[meta.id] || "";
  console.log(value);
  switch (meta.type) {
    case "text":
      return <Text meta={meta} onMetaChange={onMetaChange} value={value} />;
    case "boolean":
      return <Boolean meta={meta} onMetaChange={onMetaChange} value={value} />;
    case "select":
      meta.options2 = _to_options(meta.options);
      meta.options2 = [{ key: "", label: "Select" }, ...meta.options2];
      return (
        <SelectMaterial meta={meta} onMetaChange={onMetaChange} value={value} />
      );

    default:
      return "";
  }
};

export default Input;
