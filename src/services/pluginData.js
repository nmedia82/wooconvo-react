/**
 * user_id: context
 * 1. wp_admin
 * 2. yith_vendor
 * 3. myaccount
 * 4. dokan_vendor
 */
// window.WOOCONVO_Data = JSON.stringify({
//   api_url: "https://wooconvo.najeebmedia.com/wp-json/wooconvo/v1",
//   user_id: 3,
//   context: "yith_vendor",
//   settings: {
//     message_vs_order_status: "wc-pending",
//     enable_msg_count_display: true,
//     enable_msg_search: true,
//     myaccount_tab_label: "My messages",
//     bg_color_message_header: "#e1d5d5",
//     bg_color_order_messages: "#9fc7df",
//     enable_order_notices: true,
//     reverse_message_display_order: false,
//     enable_file_attachments: true,
//     attachments_required: false,
//     attachments_in_email: true,
//     image_open_click: true,
//   },
// });

window.WOOCONVO_Data = JSON.stringify({
  api_url: "https://wooconvo.najeebmedia.com/wp-json/wooconvo/v1",
  user_id: 3,
  context: "myaccount",
  settings: {
    message_vs_order_status: "wc-pending",
    enable_msg_count_display: true,
    enable_msg_search: true,
    myaccount_tab_label: "My messages",
    bg_color_message_header: "#e1d5d5",
    bg_color_order_messages: "#9fc7df",
    icon_color_send_button: "#000",
    icon_color_upload_button: "blue",
    enable_order_notices: true,
    reverse_message_display_order: true,
    enable_file_attachments: true,
    max_files_allowed: 2,
    max_file_size: 50,
    thumb_size: 200,
    file_types_allowed: "jpg,png,pdf",
    attachments_required: false,
    attachments_in_email: true,
    image_open_click: true,
    quick_replies: ["Hi", "Well done man."],
  },
});

const { user_id, order_date, api_url, context, settings } = JSON.parse(
  window.WOOCONVO_Data
);

export default {
  order_date,
  user_id,
  api_url,
  context,
  settings,
};
