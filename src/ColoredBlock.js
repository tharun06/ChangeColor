import React from 'react';
import ChangeColorButton from './ChangeColorButton.js';

class ColoredBlock extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      color: 'green'
    };
  }
  changeColor() {
    this.setState((prevState) => ({
      color: prevState.color === 'red' ? 'blue' : 'red'
    }));
  }
  render() {
    return (
      <div style={{height: 'vmax', width: 'vmax', backgroundColor: this.state.color}}>
        <ChangeColorButton clickHandler={this.changeColor} currentColor={this.state.color}></ChangeColorButton>
      </div>
    )
  }
}

export default ColoredBlock;