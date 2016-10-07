import React, { Component, PropTypes } from 'react';

class RadioIcon extends Component {
  constructor() {
    super();
  }

  render() {
    const { checked } = this.props;
    return (
      <div className={ `btn-radio-icon${checked && '-checked' || ''}` }>
        { checked && <div className="btn-radio-icon-checked-inner" /> }
      </div>
    );
  }
}

RadioIcon.propTypes = {
  checked: PropTypes.boolean,
};
