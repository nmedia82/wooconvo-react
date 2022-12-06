import Text from "./text";
import Boolean from "./boolean";
import "./input.css";
import Select from "./select";
import { _to_options } from "../common/helper";

const Input = ({ meta, onMetaChange }) => {
  switch (meta.type) {
    case "text":
      return <Text meta={meta} onMetaChange={onMetaChange} />;
    case "boolean":
      return <Boolean meta={meta} onMetaChange={onMetaChange} />;
    case "select":
      const options = _to_options(JSON.stringify(meta.options));
      meta.oo = [...options];
      console.log(meta);
      return <Select meta={meta} onMetaChange={onMetaChange} />;

    default:
      return "";
  }
};

export default Input;
