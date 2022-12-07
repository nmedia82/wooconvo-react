export const _to_options = (options) => {
  return Object.keys(options).map((b) => ({
    key: b,
    label: options[b],
  }));
};
