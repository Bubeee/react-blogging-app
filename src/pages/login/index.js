import React, { Component } from 'react';
import { Header, Footer } from '../../components/shared';
import { connect } from 'react-redux';
import './login.css';
import { login } from '../../actions';

export class Login extends Component {
  inputLogin;
  inputPassword;

  submit(e) {
    e.preventDefault();
    if (!this.inputLogin.value.trim()) return;
    if (!this.inputPassword.value.trim()) return;

    this.props.login({
      email: this.inputLogin.value,
      password: this.inputPassword.value
    });

    this.inputLogin.value = '';
    this.inputPassword.value = '';
  }

  render() {
    return (
      <div>
        <Header />
        <div className="login-form__container">
          <form onSubmit={this.submit.bind(this)}>
            <label className="post-form__label" htmlFor="title">
              Email
            </label>
            <input
              className="login-form__input"
              name="title"
              type="text"
              placeholder="Enter your email"
              ref={node => (this.inputLogin = node)}
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
    login: (email, password) => {
      dispatch(login(email, password));
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);
