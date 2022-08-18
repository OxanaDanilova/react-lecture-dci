import logo from "./images/bird.jpg";
import "./App.css";
import gezwitscher from "./gezwitscher.js";

function App() {
  const posts = gezwitscher.map((post, index) => {
    return (
      <div key={index}>
        <p>{post.user}</p>
        <p>{post.content}</p>
        <p>{post.date}</p>
      </div>
    );
  });

  return (
    <div className="App">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="twitter-blue">Zwitscher</h1>
      <h2>Posts</h2>
      {posts}
    </div>
  );
}

export default App;
