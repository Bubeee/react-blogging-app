import React, { Component } from 'react';
import { Header, Footer } from '../../components/shared';
import { connect } from 'react-redux';
import Post from '../../components/post/post';
import './posts.css';
import { removePost } from '../../actions';

class PostsList extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="posts-list__container">
          {this.props.posts.map(post => (
            <Post
              key={post.id}
              {...post}
              // onChangeClick={onChangeClick}
              onRemoveClick={() => this.props.onRemoveClick(post.id)}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveClick: id => {
      dispatch(removePost(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
