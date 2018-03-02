import React from 'react';
import './post.css';

const Post = ({ id, title, content, onChangeClick, onRemoveClick }) => {
  return (
    <div className="post-item__container">
      <h2 className="">{title}</h2>
      <p className="">{content}</p>
      <a href="#" className="btn btn-danger btn-lg remove__button">
        <span className="glyphicon glyphicon-remove-circle" onClick={() => onRemoveClick(id)}> Delete</span>
      </a>
    </div>
  );
};

export default Post;
