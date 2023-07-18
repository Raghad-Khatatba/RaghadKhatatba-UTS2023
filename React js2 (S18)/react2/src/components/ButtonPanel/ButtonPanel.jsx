import React, { Component } from 'react';
import Button from '../Button/Button';
import './ButtonPanel.css';
class ButtonPanel extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const buttonsData = [
        ['AC', '+/-', '%', '/'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
      ];
  
      return (
        <div className="button-panel">
          {buttonsData.map((row, rowIndex) => (
            <div key={rowIndex} className="button-row">
              {row.map((buttonName) => (
                <Button
                  key={buttonName}
                  name={buttonName}
                  orangeColor={
                    buttonName === '/' ||
                    buttonName === 'x' ||
                    buttonName === '-' ||
                    buttonName === '+' ||
                    buttonName === '='
                  }
                  wide={buttonName === '0'}
                  clickHandler={this.props.clickHandler}
                />
              ))}
            </div>
          ))}
        </div>
      );
    }
  }
  
  export default ButtonPanel;
  