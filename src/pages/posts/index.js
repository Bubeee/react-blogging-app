import React, { Component } from 'react';
import { Header, Footer } from '../../components/shared';

export class Posts extends Component {
  render() {
    return (
      <div>
        <Header />
        Hello posts!
        <Footer />
      </div>
    );
  }
}
