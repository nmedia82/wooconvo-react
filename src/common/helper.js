export const _to_options = (options) => {
  options = JSON.parse(options);
  //   for (const [key, value] of Object.entries(options)) {
  //     console.log(`${key}, ${value}`);
  //     new_options = [...new_options, { [key]: value }];
  //   }

  const new_options = Object.keys(options).map((b) => ({
    key: b,
    label: options[b],
  }));
  console.log(new_options);
  return new_options;
};
