const Select = ({ meta, onMetaChange }) => {
  return (
    <div className="wcforce-field-wrapper">
      <select
        name={meta.name}
        id={meta.name}
        placeholder={meta.title}
        className="wcmore-input"
        onChange={(e) => onMetaChange(e, meta)}
        value={meta.value}
      >
        {meta.options2.map((option) => (
          <option key={option.key} value={option.key}>
            {option.label}
          </option>
        ))}
      </select>
      <br />
      <small>{meta.detail}</small>
    </div>
  );
};

export default Select;
