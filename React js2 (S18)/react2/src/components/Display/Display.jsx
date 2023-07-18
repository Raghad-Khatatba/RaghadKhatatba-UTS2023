import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const { value } = this.props;
  
      return (
        <div className="display">
          <p>{value}</p>
        </div>
      );
    }
  }
  
  export default Display;
  