import React from "react";

function BlogContent(props) {
  return <div id="blog-content">{props.articleText} NUM {props.num}</div>;
}

export default BlogContent;
