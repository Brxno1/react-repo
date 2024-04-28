import "./styles.css";

import { Component } from "react";

export class Button extends Component {
  render() {
    const { text, onCLick, disabled } = this.props;

    return (
      <button
        className="button"
        disabled={disabled}
        onClick={onCLick}>
        {text}
      </button>
    );
  }
}
