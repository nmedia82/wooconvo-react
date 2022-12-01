// import config from "../config";
import httpService from "./httpService";
export function getAdminMeta() {
  const url = `${window.WOOCONVO_API_URL}/get-admin-meta`;
  return httpService.post(url);
}
