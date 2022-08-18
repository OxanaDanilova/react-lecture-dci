import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import "./Post.scss";

function Post(props) {
  return (
    <Card raised={true} sx={{ maxWidth: 800, marginTop: 4 }}>
      <CardContent>
        <p>
          <b>{props.post.user}</b>
        </p>
        <p> {props.post.content}</p>
        <p>{props.post.date}</p>
      </CardContent>
    </Card>
  );
}

export default Post;
