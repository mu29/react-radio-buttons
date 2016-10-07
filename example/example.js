'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { RadioGroup, RadioButton } from '../index.js';

let App = React.createClass({
  render() {
    return (
      <RadioGroup>
        <RadioButton value="apple">
          Apple
        </RadioButton>
        <RadioButton value="orange">
          Orange
        </RadioButton>
        <RadioButton value="watermelon">
          Watermelon
        </RadioButton>
      </RadioGroup>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('content'));