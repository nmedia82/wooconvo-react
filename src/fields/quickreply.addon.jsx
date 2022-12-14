import { useState, useEffect } from "react";
import {
  Divider,
  InputBase,
  IconButton,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
  Button,
  ListItemAvatar,
  Avatar,
  Tooltip,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import TextsmsIcon from "@mui/icons-material/Textsms";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
export default function Quickreply({ meta, onMetaChange, value }) {
  const [QuickReply, setQuickReply] = useState("");
  const [QuickReplies, setQuickReplies] = useState([...value]);

  const handleAddReply = () => {
    // console.log(QuickReply);
    const replies = [...QuickReplies, QuickReply];
    setQuickReplies(replies);
    onMetaChange(replies, meta);
  };

  const handleDelete = (index) => {
    const replies = QuickReplies.filter((f, i) => i !== index);
    setQuickReplies(replies);
    onMetaChange(replies, meta);
  };

  return (
    <Box>
      <Box
        sx={{
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            mt: "10px",
            display: "flex",
            width: 500,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            value={QuickReply}
            onChange={(e) => setQuickReply(e.target.value)}
            placeholder="Type Message Here..."
          />

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="Add Field"
            onClick={handleAddReply}
          >
            <AddBoxIcon />
          </IconButton>
        </Paper>
      </Box>
      <Box>
        <DragDropContext>
          <Droppable droppableId="quickreplyItems">
            {(provided) => (
              <List
                className="quickreplyItems"
                {...provided.droppableProps}
                ref={provided.innerRef}
                sx={{ width: "100%", bgcolor: "background.paper", mt: "20px" }}
              >
                {QuickReplies.map((reply, index) => (
                  <Draggable
                    key={index}
                    draggableId={index.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <ListItem
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: "#1976d2" }}>
                            <TextsmsIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={reply} />

                        {/* Remove icon With tooltip */}
                        <ListItemIcon>
                          <Tooltip title="remove" arrow placement="top-start">
                            <IconButton
                              sx={{ color: "red" }}
                              onClick={() => handleDelete(index)}
                            >
                              <RemoveCircleIcon />
                            </IconButton>
                          </Tooltip>
                        </ListItemIcon>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <Divider />
              </List>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={2}
        direction="row"
      >
        {/* <Button variant="contained">Save</Button> */}
      </Stack>
    </Box>
  );
}
