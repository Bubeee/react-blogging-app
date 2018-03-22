import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { connect } from 'react-redux';
import { logout } from '../../actions';

export class Header extends Component {
  logout() {

    localStorage.setItem('token', '');
    dispatch(logoutRequest());
  }

  render() {
    const isLoggedIn = localStorage.getItem('token') != "";
    return (
      <div className="header__container">
        blooooggin
        {isLoggedIn ? (
          <Link
            className="btn btn-success btn-lg header__button"
            to="/"
            onClick={this.logout.bind(this)}
          >
            Logout
          </Link>
        ) : (
          <span>
            <Link className="btn btn-success btn-lg header__button" to="/login">
              Login
            </Link>
            <Link
              className="btn btn-success btn-lg header__button"
              to="/register"
            >
              Register
            </Link>
          </span>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  debugger;
  return {
    logout: () => {
      dispatch(logout());
    }
  };
};

export default connect(null, mapDispatchToProps)(Header);
