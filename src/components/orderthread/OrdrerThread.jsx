import { Divider } from "@mui/material";
import ReplyMsg from "./ReplyMsg";
import MessagesBody from "./Messages";
export default function WooConvoThread({ Thread, showMore, onReplySend }) {
  return (
    <>
      <MessagesBody Thread={Thread} showMore={showMore} />

      <Divider variant="inset" component="h2" sx={{ height: 10 }} />

      {/* Reply to --- */}
      <ReplyMsg onReplySend={onReplySend} />
    </>
  );
}
