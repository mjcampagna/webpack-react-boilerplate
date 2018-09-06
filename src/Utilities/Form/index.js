import React, { Component, Fragment } from 'react';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleFormOnChange = event => {
		if ( event.target.type === 'checkbox' ) {

		}
		else {
			this.setState({
				[event.target.name]: event.target.value
			})
		}
	}

	handleFormOnSubmit = event => {
		event.preventDefault();
	}

	render() {
		return (
			<WrappedComponent {...this.props} 
				onChange={this.handleFormOnChange} 
				onSubmit={this.handleFormOnSubmit} 
			/>
		);
	}
}
