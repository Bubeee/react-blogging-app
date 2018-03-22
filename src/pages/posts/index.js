import React, { Component } from 'react';
import { Header, Footer, SearchBar } from '../../components/shared';
import { connect } from 'react-redux';
import Post from '../../components/post/post';
import './posts.css';
import { removePost, requestPosts, getPosts, logout } from '../../actions';
import { Link } from 'react-router-dom';

class PostsList extends Component {
  componentDidMount() {
    this.props.onSearch('');
  }

  render() {
    return (
      <div>
        <Header />
        <div className="posts-list__container">
          <Link className="btn btn-success btn-lg add-post__button" to="/new">
            Add Post
          </Link>

          <SearchBar onSearch={this.props.onSearch} />
          {this.props.posts.items.map(post => (
            <Post
              key={post._id}
              {...post}
              onRemoveClick={() => this.props.onRemoveClick(post._id)}
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
    },
    onSearch: serachText => {
      dispatch(getPosts(serachText));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
