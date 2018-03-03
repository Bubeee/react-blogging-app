import React, { Component } from 'react';
import { Header, Footer } from '../../components/shared';
import { connect } from 'react-redux';
import './register.css';
import { register } from '../../actions';

class Register extends Component {
  inputUsername;
  inputEmail;
  inputPassword;

  submit(e) {
    e.preventDefault();
    if (!this.inputUsername.value.trim()) return;
    if (!this.inputEmail.value.trim()) return;
    if (!this.inputPassword.value.trim()) return;

    this.props.register({
      email: this.inputEmail.value,
      username: this.inputUsername.value,
      password: this.inputPassword.value
    });

    this.inputUsername.value = '';
    this.inputEmail.value = '';
    this.inputPassword.value = '';

  }

  render() {
    return (
      <div>
        <Header />
        <div className="login-form__container">
          <form onSubmit={this.submit.bind(this)}>
            <label className="post-form__label" htmlFor="title">
              Username
            </label>
            <input
              className="login-form__input"
              name="title"
              type="text"
              placeholder="Enter your email"
              ref={node => (this.inputUsername = node)}
            />
            <label className="post-form__label" htmlFor="email">
              Email
            </label>
            <input
              className="login-form__input"
              name="email"
              type="text"
              placeholder="Enter your email"
              ref={node => (this.inputEmail = node)}
            />
            <label className="post-form__label" htmlFor="content">
              Password
            </label>
            <input
              type="password"
              className="login-form__password"
              name="content"
              placeholder="Enter your password"
              ref={node => (this.inputPassword = node)}
            />
            <input className="login-form__submit" type="submit" value="Login" />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: (username, email, password) => {
      dispatch(register(username, email, password));
    }
  };
};

export default connect(null, mapDispatchToProps)(Register);
