export const _to_options = (options) => {
  return Object.keys(options).map((b) => ({
    key: b,
    label: options[b],
  }));
};

export const wooconvo_makeid = (length = 6) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const get_setting = (key, defaultValue = "") => {
  var settings = localStorage.getItem("wooconvo_settings");
  if (!settings) return defaultValue;
  settings = JSON.parse(settings);
  if (!settings[key]) return defaultValue;
  return settings[key];
};
