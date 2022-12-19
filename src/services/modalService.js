// import config from "../config";
import httpService from "./httpService";
import pluginData from "./pluginData";

const { api_url, user_id, order_id, context } = pluginData;

export function getAdminMeta() {
  const url = `${api_url}/get-admin-meta`;
  // console.log(url);
  return httpService.get(url);
}

// get order detail by id
// export function getOrderDetail(order_id) {
//   const url = `${api_url}/get-order-detail?order_id=${order_id}`;
//   return httpService.get(url);
// }

// add message in order
export function addMessage(order_id, message, attachments = []) {
  const { api_url, user_id } = pluginData;
  const url = `${api_url}/add-message`;
  const data = { message, user_id, order_id, attachments };
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
  let url = `${api_url}/get-orders`;
  if (context === "myaccount") url += `?customer_id=${user_id}`;
  return httpService.get(url);
}
