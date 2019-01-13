import "./SavedBar.css";
import SavedTerm from "../SavedTerm/SavedTerm";

import React, { Component } from "react";

class SavedBar extends Component {
  state = {
    savedTerms: [],
    termsSearch: []
  };

  componentDidMount() {
    if (!localStorage.TermsList) localStorage.TermsList = JSON.stringify([]);
    else this.setState({ savedTerms: JSON.parse(localStorage.TermsList) });
  }

  addToSavedList = () => {
    if (!this.props.term) return;
    let terms = JSON.parse(localStorage.TermsList);
    
    if (!terms.includes(this.props.term)) {
      terms.push(this.props.term);
      localStorage.setItem("TermsList", JSON.stringify(terms));
      this.setState({ savedTerms: terms });
    }
  };

  handleTermsSearch = term => {
    let markedWords = this.state.termsSearch;
    markedWords.includes(term)
      ? (markedWords = markedWords.filter(word => word !== term))
      : markedWords.push(term);

    this.setState({ termsSearch: markedWords });
    this.props.onSearch(markedWords.join("  "));
  };

  render() {
    let termsList = this.state.savedTerms;

    termsList = termsList.map(term => {
      return (
        <SavedTerm key={term} text={term} onSearch={this.handleTermsSearch} />
      );
    });

    return (
      <div className="saved-container">
        <button className="save-btn" onClick={this.addToSavedList}>
          <i className="save outline icon" />
        </button>
        <h4 className="keywords-title"> | saved  Keywords</h4>
        {termsList.length > 0 && <div className="saved-words">{termsList}</div>}
      </div>
    );
  }
}

export default SavedBar;
