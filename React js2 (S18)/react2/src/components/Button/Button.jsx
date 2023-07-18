import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    constructor(props) {
      super(props);
    }
  
    handleClick = () => {
      this.props.clickHandler(this.props.name);
    };
  
    render() {
      const { name, orangeColor, wide } = this.props;
  
      return (
        <button
          className={`button ${orangeColor ? 'orange' : ''} ${wide ? 'wide' : ''}`}
          onClick={this.handleClick}
        >
          {name}
        </button>
      );
    }
  }
  
  export default Button;
  