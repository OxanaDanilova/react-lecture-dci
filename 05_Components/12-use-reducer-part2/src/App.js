import "./App.scss";
import React, { useReducer } from "react";
import Timeline from "./components/Timeline/Timeline";
import Header from "./components/Header/Header";
import CreatePost from "./components/CreatePost/CreatePost";
import gezwitscher from "./gezwitscher";

const initState = {
  posts: gezwitscher,
  user: {
    name: "Ferdi Hoske",
  },
  newPost: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "createNewPost":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    default:
      console.log("Ups...");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div className="App">
      <Header />
      <CreatePost
        dispatch={dispatch}
        user={state.user}
        newPost={state.newPost}
      />
      <Timeline posts={state.posts} />
      <button>Klick mich</button>
    </div>
  );
}

export default App;
