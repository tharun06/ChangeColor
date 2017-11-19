import React from 'react';

class ChangeColorButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.clickHandler();
	}
	render() {
		return (
			<button onClick = {this.handleClick}> Change the color</button>
			);
	}
}

export default ChangeColorButton;






