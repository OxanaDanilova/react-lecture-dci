import "./Timeline.scss";
import Post from "./Post/Post";

function Timeline(props) {
  const posts = props.posts.map((post, index) => {
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
