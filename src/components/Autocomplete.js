import React, { Component } from "react";

class Autocomplete extends Component {
  state = {
    items: [],
    suggestions: [],
    data: {
      autocomplete: ""
    }
  };

  componentDidMount = () => {
    this.initAutocomplete();
  };

  initAutocomplete = () => {
    if (this.props.items.length > 0) this.setState({ items: this.props.items });
  };

  changeHandler = e => {
    const value = e.target.value;

    let suggestions = [];

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");

      suggestions = this.state.items.sort().filter(item => regex.test(item));
    }

    this.setState({
      suggestions,
      data: {
        ...this.state.data,
        autocomplete: value
      }
    });
  };

  suggestionSelected = item => {
    this.setState({
      suggestions: [],
      data: {
        ...this.state.data,
        autocomplete: item
      }
    });
  };

  renderSuggestions = () => {
    const { suggestions } = this.state;

    let list = "";

    if (suggestions.length > 0) {
      list = suggestions.map(suggestion => (
        <li onClick={() => this.suggestionSelected(suggestion)}>
          {suggestion}
        </li>
      ));
    }

    return <ul>{list}</ul>;
  };

  render() {
    return (
      <div>
        <div className="autocomplete">
          <input
            type="text"
            name="autocomplete"
            onChange={this.changeHandler}
            value={this.state.data.autocomplete}
          />
          <div className="autocomplete-suggestion-list">
            {this.renderSuggestions()}
          </div>
        </div>
      </div>
    );
  }
}

export default Autocomplete;
