// import config from "../config";
import pluginData from "../services/pluginData";
import httpService from "./httpService";
const { api_url, context } = pluginData;
export function getAdminMeta() {
  const url = `${api_url}/get-admin-meta`;
  return httpService.get(url);
}

export function saveSettings(data) {
  const url = `${api_url}/save-settings`;
  return httpService.post(url, data);
}

export function getSettings(data) {
  const url = `${api_url}/get-settings`;
  return httpService.get(url);
}

export function setStarred(order_id) {
  const url = `${api_url}/set-order-starred`;
  const data = { order_id };
  return httpService.post(url, data);
}

export function setUnStarred(order_id) {
  const url = `${api_url}/set-order-unstarred`;
  const data = { order_id };
  return httpService.post(url, data);
}

export function resetUnread(order_id) {
  const url = `${api_url}/reset-unread`;
  const user_type = context === "wp_admin" ? "vendor" : "customer";
  const data = { order_id, user_type };
  return httpService.post(url, data);
}

// export function downloadFile(order_id, filename) {
//   const url = `${api_url}/download-file`;
//   const user_type = context === "wp_admin" ? "vendor" : "customer";
//   const data = { order_id, filename };
//   return httpService.post(url, data);
// }
