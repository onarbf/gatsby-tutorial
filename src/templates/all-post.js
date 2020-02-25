import React from 'react';

export default ({ pageContext: { allPost } }) => (
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>Posts</h1>
      {allPost.map(post => (
        <>
        <h2>{post.post}</h2>
        <span>{post.author}|{post.creationDate}</span>
        <br/>
        <hr/>
        </>
      ))}
  </div>
);
