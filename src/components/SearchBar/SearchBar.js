import "./SearchBar.css";
import React, { Component } from "react";

class SearchBar extends Component {
  
  onTermType = e => {
    this.props.onSubmit(e.target.value);
  };
  render() {

    return (
      <div className="search-container">
        <div className="search-head">
          <h1 className="search-title">
            Pix!<span className="sub-title">your image search</span>
          </h1>
        </div>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="type for results..."
            value={this.props.termValue}
            onChange={this.onTermType}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
