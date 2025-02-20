import * as React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { common } from "@mui/material/colors";
import Attachments from "./Attachments";
import AudioAttachment from "./AudioAttachment";
import { DeleteOutline, SendOutlined } from "@mui/icons-material";
import QuickReplyPopup from "./QuickReply";
import {
  get_setting,
  sanitize_filename,
  wooconvo_makeid,
} from "../../services/helper";
import { getDefaultThumbURL } from "../../services/modalService";

export default function ReplyMsg({ onReplySend, context }) {
  //Emoji
  const [ReplyText, setReplyText] = useState("");
  const [Files, setFiles] = useState([]);
  const [selectedAudio, setSelectedAudio] = useState(null);

  const validateSelectedFiles = (files_selected) => {
    // max_files_allowed
    // max_file_size
    // file_types_allowed
    let msg = "";
    const max_files_allowed = Number(get_setting("max_files_allowed", 1));
    const max_file_size = Number(get_setting("max_file_size", 100));
    let file_types_allowed = get_setting("file_types_allowed", "jpg,png,pdf");
    file_types_allowed = file_types_allowed.split(",");

    const wrong_found = Object.keys(files_selected).find(
      (f) =>
        !file_types_allowed.includes(files_selected[f].name.split(".").pop())
    );
    if (wrong_found) msg += `Filetypes allowed ${file_types_allowed.join(",")}`;
    // console.log(file_types_allowed, files_selected, wrong_found);

    // console.log(files_selected);
    if (files_selected.length + Files.length > max_files_allowed)
      msg += `\nMax files limit is ${max_files_allowed}`;

    const found = Object.keys(files_selected).find(
      (f) => files_selected[f].size > max_file_size * 1024
    );
    if (found) msg += `\nMax filesize limit is ${max_file_size}KB`;

    if (msg) alert(msg);
    return msg === "";
  };

  const handleFileSelected = (event) => {
    let fileUploaded = event.target.files;

    if (!validateSelectedFiles(fileUploaded)) return;

    fileUploaded = Object.keys(fileUploaded).map((f) => {
      fileUploaded[f].id = wooconvo_makeid();
      return fileUploaded[f];
    });
    const files = [...Files, ...fileUploaded];
    previewFile(files);
    setFiles(files);
  };

  const isImage = (file_type) => {
    const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    return validImageTypes.includes(file_type);
  };

  const previewFile = (files) => {
    files.forEach((file) => {
      const filename = sanitize_filename(file.name);
      var reader = new FileReader();
      reader.onloadend = function () {
        const thumb_url = isImage(file.type)
          ? reader.result
          : getDefaultThumbURL(filename);
        document.getElementById(`preview-${filename}`).src = thumb_url;
      };
      reader.readAsDataURL(file);
    });
  };

  const hanldeImageRemove = (file_id) => {
    const files = [...Files];
    const filter = files.filter(
      (file) => sanitize_filename(file.name) !== file_id
    );
    setFiles(filter);
  };

  const validateAttachments = () => {
    const attachment_enabled = get_setting("enable_file_attachments");
    if (!attachment_enabled) return false;
    const attach_required = get_setting("attachments_required");
    if (attach_required && !Files.length) return true;
    return false;
  };

  const handleEnterKey = (event) => {
    if (ReplyText === "" || get_setting("show_textarea_reply")) return;

    if (event.key === "Enter") {
      handleReplySend();
    }
  };

  const getThumbSize = (file) => {
    const thum_size = isImage(file.type) ? get_setting("thumb_size", 150) : 50;
    return thum_size;
  };

  const handleAudioSelected = (file) => {
    setSelectedAudio(file);
  };

  const removeAudioAttachment = () => {
    setSelectedAudio(null);
  };

  const handleReplySend = () => {
    onReplySend(ReplyText, Files, selectedAudio);
    setReplyText("");
    setFiles([]);
    setSelectedAudio(null);
  };

  const handleQuickReplySend = (reply) => {
    onReplySend(reply, Files);
    previewFile([]);
    setFiles([]);
  };

  return (
    <Box sx={{ width: "100%", mt: 2, padding: 3 }}>
      <Paper
        component="form"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          p: "8px",
          bgcolor: common.white,
        }}
      >
        {get_setting("enable_audio_recording") && (
          <AudioAttachment onAudioSelected={handleAudioSelected} />
        )}
        {get_setting("enable_file_attachments") && (
          <Attachments onFileSelected={handleFileSelected} />
        )}

        <TextField
          value={ReplyText}
          onChange={(e) => setReplyText(e.target.value)}
          fullWidth
          id="standard-basic"
          variant="outlined"
          onKeyPress={handleEnterKey}
          multiline={get_setting("show_textarea_reply", false)} // Add this prop to enable multiline
          rows={4} // Set the number of rows to show
        />

        {get_setting("enable_quickreply") && context !== "myaccount" && (
          <>
            <Divider sx={{ height: "auto" }} orientation="vertical" />
            <QuickReplyPopup onQuickReplySend={handleQuickReplySend} />
          </>
        )}

        <IconButton
          sx={{ p: 1, color: get_setting("icon_color_send_button") }}
          aria-label="Send"
          onClick={handleReplySend}
          disabled={ReplyText === "" || validateAttachments()}
        >
          <SendOutlined />
        </IconButton>
      </Paper>

      {/* Attachments Display*/}

      <Box
        sx={{ p: 3, flexDirection: "row", display: "flex", flexWrap: "wrap" }}
      >
        {validateAttachments() && (
          <Typography color={"red"} textAlign="center">
            Attachments are required
          </Typography>
        )}
        {Files.map((file) => (
          <Box
            className="preview-thumb"
            key={sanitize_filename(file.name)}
            minWidth="150px"
          >
            <img
              className="preview-thumb-img"
              height={getThumbSize(file)}
              width={getThumbSize(file)}
              id={`preview-${sanitize_filename(file.name)}`}
              alt={sanitize_filename(file.name)}
            />
            <p className="preview-thumb-tool">
              <IconButton
                color="primary"
                sx={{ p: 1 }}
                aria-label="Send"
                onClick={() => hanldeImageRemove(sanitize_filename(file.name))}
              >
                <DeleteOutline />
              </IconButton>
              {/* <Typography variant="span" display={"block"}>
                {sanitize_filename(file.name)}
              </Typography> */}
            </p>
          </Box>
        ))}

        {selectedAudio && (
          <Box
            className="audio-preview"
            sx={{ display: "flex", alignItems: "center", gap: 2 }}
          >
            <audio controls src={URL.createObjectURL(selectedAudio)} />
            <IconButton color="error" onClick={removeAudioAttachment}>
              <DeleteOutline />
            </IconButton>
            <Typography variant="body2">{selectedAudio.name}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
