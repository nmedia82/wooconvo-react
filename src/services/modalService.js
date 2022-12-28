// import config from "../config";
import httpService from "./httpService";
import pluginData from "./pluginData";

const { api_url, user_id, context } = pluginData;

export function getAdminMeta() {
  const url = `${api_url}/get-admin-meta`;
  // console.log(url);
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

// add message in order
export function addMessage(order_id, message, attachments = []) {
  const { api_url, user_id } = pluginData;
  const url = `${api_url}/add-message`;
  const data = { message, user_id, order_id, attachments, context };
  return httpService.post(url, data);
}

// upload files to site
export function uploadFiles(file) {
  // console.log(file);

  const url = `${api_url}/upload-file`;
  const data = new FormData();
  data.append("file", file);
  // data.append("order_id", order_id);
  // data.append("user_id", user_id);
  // const data = { order_id, file };
  const headers = { headers: { "content-type": "multipart/form-data" } };
  return httpService.post(url, data, headers);
}

// get all orders for admin/vedor/customers
export function getOrders() {
  const { api_url } = pluginData;
  let url = `${api_url}/get-orders?user_id=${user_id}&context=${context}`;
  return httpService.get(url);
}
