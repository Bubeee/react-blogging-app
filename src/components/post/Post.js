import React from 'react';
import './post.css';

const Post = ({ id, title, content, onChangeClick, onRemoveClick }) => {
  return (
    <div className="post-item__container" onClick={() => onChangeClick(id)}>
      <h2 className="card-text">{title}</h2>
      <p className="card-executor">{content}</p>
      <span className="card-remove" onClick={() => onRemoveClick(id)} />
    </div>
  );
};

export default Post;
