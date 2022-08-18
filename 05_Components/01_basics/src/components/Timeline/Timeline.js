import "./Timeline.scss";
import gezwitscher from "../../gezwitscher.js";
import Post from "./Post/Post";

function Timeline() {
  const posts = gezwitscher.map((post, index) => {
    return <Post key={index} post={post} />;
  });

  return (
    <div className="timeline">
      <h2>Posts</h2>
      {posts}
    </div>
  );
}
export default Timeline;
