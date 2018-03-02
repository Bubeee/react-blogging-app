import React, { Component } from 'react';
import { Header, Footer } from '../../components/shared';
import { connect } from 'react-redux';
import './post.css';

class PostForm extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="post-form__container">
          <form>
              <label className="post-form__label" htmlFor="title">Title</label>
              <input className="post-form__input" name="title" type="text" placeholder="Enter the title" />
              <label className="post-form__label" htmlFor="content">Content</label>
              <textarea className="post-form__textarea" name="content" placeholder="Enter the content" />
            <input className="post-form__submit" type="submit" value="Submit" />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    create: post => {
      dispatch(addPost(post));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
