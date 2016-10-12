'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { RadioGroup, RadioButton } from '../index.jsx';

let App = React.createClass({
  onChange(value) {
    console.log(value);
  },
  render() {
    return (
      <div style={ { padding: 16 } }>
        <h2>Vertical Radio Buttons</h2>
        <RadioGroup onChange={ this.onChange }>
          <RadioButton value="apple">
            Apple
          </RadioButton>
          <RadioButton value="orange">
            Orange
          </RadioButton>
          <RadioButton value="melon">
            Melon
          </RadioButton>
        </RadioGroup>
        <h2 style={ { marginTop: 64 } }>Horizontal Radio Buttons</h2>
        <RadioGroup onChange={ this.onChange } horizontal>
          <RadioButton value="apple">
            Apple
          </RadioButton>
          <RadioButton value="orange">
            Orange
          </RadioButton>
          <RadioButton value="melon">
            Melon
          </RadioButton>
        </RadioGroup>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('content'));