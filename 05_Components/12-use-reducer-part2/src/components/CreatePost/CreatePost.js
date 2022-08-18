import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function CreatePost(props) {
  const [newPostContent, setNewPostContent] = useState("");
  const createNewPost = () => {
    const postDate = new Date().toJSON().slice(0, 16).replace("T", " ");
    console.log(postDate);
    const newPost = {
      user: props.user.name,
      content: newPostContent,
      date: postDate,
    };
    props.dispatch({
      type: "createNewPost",
      payload: newPost,
    });
    setNewPostContent("");
  };
  return (
    <Card raised={true} sx={{ maxWidth: 800, marginTop: 4 }}>
      <CardContent>
        <p>Hallo Hallöchen</p>
        <TextField
          id="outlined-multiline-flexible"
          multiline
          fullWidth
          maxRows={4}
          placeholder="Was passiert?"
          value={newPostContent}
          onChange={(event) => setNewPostContent(event.target.value)}
        />
        <Button
          sx={{ marginTop: 4 }}
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => createNewPost()}
        >
          Send
        </Button>
      </CardContent>
    </Card>
  );
}
