import { useParams } from "react-router-dom";

import React from 'react'

function BlogPost() {
    const { id }= useParams();
  return (
    <div>
        <h2>Blog Post ID: {id}</h2>
        <p>This is the content of blog post #{id}.</p>
    </div>
  )
}

export default BlogPost