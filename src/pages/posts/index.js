import React, { Component } from 'react';
import { Header, Footer } from '../../components/shared';
import { connect } from 'react-redux';
import Post from '../../components/post/post';

class PostsList extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.posts.map(post => (
          <Post
            key={post.id}
            {...post}
            // onChangeClick={props.onChange}
            // onRemoveClick={props.onRemove}
          />
        ))}
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
    remove: id => {
      dispatch(removePost(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
