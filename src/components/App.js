import React from "react";
import BlogContent from "./BlogContent";
import BlogPost from "./BlogPost";

function App() {
  return (
  <>
  <BlogContent articleText="React Focus On UI" num={2}/>
  <BlogContent articleText="React is created By Facebook"/>
  <BlogPost/>
  </>
  );
}

export default App;
