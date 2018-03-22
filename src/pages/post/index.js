import React, { Component } from 'react';
import { Header, Footer } from '../../components/shared';
import { connect } from 'react-redux';
import './post.css';
import { addPost, addPostRequest } from '../../actions';

class PostForm extends Component {
  inputTitle;
  inputContent;

  submitPost(e) {
    e.preventDefault();

    if (!this.inputTitle.value.trim())
        return;
        
    this.props.create({
        title: this.inputTitle.value,
        content: this.inputContent.value.trim() ? this.inputContent.value : ''
    });

    this.inputTitle.value = '';
    this.inputContent.value = '';

    const { history } = this.props;
    history.push('/posts');
};

  render() {
    return (
      <div>
        <Header />
        <div className="post-form__container">
          <form onSubmit={this.submitPost.bind(this)}>
              <label className="post-form__label" htmlFor="title">Title</label>
              <input className="post-form__input" name="title" type="text" placeholder="Enter the title" ref={node => this.inputTitle = node}/>
              <label className="post-form__label" htmlFor="content">Content</label>
              <textarea className="post-form__textarea" name="content" placeholder="Enter the content" ref={node => this.inputContent = node} />
            <input className="post-form__submit" type="submit" value="Add" />
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
      dispatch(addPostRequest(post));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
