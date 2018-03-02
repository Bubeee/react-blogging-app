import React, { Component } from 'react';
import './searchBar.css';

export class SearchBar extends Component {
  searchString;

  handleClick() {
    this.props.onSearch(this.searchString.value);
  }

  render() {
    return (
      <div className="search-bar__container">
        <input
          className="search-bar__input"
          type="text"
          placeholder="Type text to search"
          ref={node => (this.searchString = node)}
        />
        <button
          className="btn btn-info btn-lg search__button"
          onClick={this.handleClick.bind(this)}
        >
          Search
        </button>
      </div>
    );
  }
}
