import React, { Component, PropTypes } from 'react';

export class RadioGroup extends Component {
  constructor({ children, value }) {
    super();
    const index = children.findIndex(c => c.props.value === value);
    this.state = { checkedIndex: index > -1 ? index : 0 };
    this.renderChild = this.renderChild.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  get value() {
    const { checkedIndex } = this.state;
    const { children } = this.props;

    const child = children.find(c => c.props.index === checkedIndex);
    return child && child.props.value || '';
  }

  onCheck(index) {
    const { onChange, children } = this.props;
    const child = children[index];
    if (!child) return;

    this.setState({ checkedIndex: index });
    onChange && onChange(child.props.value || '');
  }

  renderChild(child, index, checked) {
    return React.cloneElement(child, {
      index, checked, onCheck: this.onCheck, ...child.props
    });
  }

  render() {
    const { checkedIndex } = this.state;
    const { children, ...props } = this.props;
    return (
      <div {...props}>
        {
          children.map((c, i) => (this.renderChild(c, i, i === checkedIndex)))
        }
      </div>
    );
  }
}

RadioGroup.propTypes = {
  children: PropTypes.node,
  checkedIndex: PropTypes.integer,
  onChange: PropTypes.func,
};

export class RadioButton extends Component {
  constructor() {
    super();
    this.getStyles = this.getStyles.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  getStyles() {
    const { padding, rootColor, pointColor } = this.props;

    return {
      root: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: rootColor || '#E0E0E0',
        borderRadius: 1,
        padding: padding || 16,
        marginBottom: padding || 16,
      },
      checked: {
        borderColor: pointColor || '#8CB9FD',
        color: pointColor || '#8CB9FD',
      },
    };
  }

  onClick() {
    const { onCheck, checked, index } = this.props;
    onCheck && onCheck(index);
  }

  render() {
    const { checked, children } = this.props;
    const style = this.getStyles();
    const buttonStyle = Object.assign(style.root, checked ? style.checked : {});
    return (
      <div style={ buttonStyle } onClick={ this.onClick }>
        <div style={ { display: 'inline-flex', width: '100%' } }>
          <div style={ { flex: 1 } }>
            { children }
          </div>
          <RadioIcon checked={ checked } />
        </div>
      </div>
    );
  }
}

RadioButton.propTypes = {
  padding: PropTypes.number,
  rootColor: PropTypes.string,
  pointColor: PropTypes.string,
  value: PropTypes.string,
  index: PropTypes.number,
  checked: PropTypes.boolean,
  children: PropTypes.node,
  onCheck: PropTypes.func,
};

class RadioIcon extends Component {
  constructor() {
    super();
    this.getStyles = this.getStyles.bind(this);
  }

  getStyles() {
    const { size, rootColor, pointColor } = this.props;
    
    return {
      root: {
        width: size || 10,
        height: size || 10,
        padding: 3,
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderRadius: '50%',
        borderStyle: 'solid',
        borderColor: rootColor || '#9E9E9E',
      },
      checked: {
        borderColor: pointColor || '#8CB9FD',
      },
      inner: {
        width: size || 10,
        height: size || 10,
        borderRadius: '50%',
        background: pointColor || '#8CB9FD',
      }
    }
  }

  render() {
    const { checked } = this.props;
    const style = this.getStyles();
    const iconStyle = Object.assign(style.root, checked ? style.checked : {});
    return (
      <div style={ iconStyle }>
        { checked && <div style={ style.inner } /> }
      </div>
    );
  }
}

RadioIcon.propTypes = {
  size: PropTypes.number,
  rootColor: PropTypes.string,
  pointColor: PropTypes.string,
  checked: PropTypes.boolean,
};
