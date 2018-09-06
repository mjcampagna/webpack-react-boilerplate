import React, { Component, Fragment } from 'react';

export default class Form extends Component {
	state = {

		text01: '',
		text02: '', 
		checkbox: true,
		checkboxGroup: ['Two', 'Three'],
		radioGroup: 'Radio One', 
		select: 'one', 

	}
	
	handleFormOnChange = event => {
		if ( event.target.type === 'checkbox' && Array.isArray(this.state[event.target.name]) ) 
		{
			let updatedState = this.state[event.target.name].slice();
			if ( event.target.checked ) {
				updatedState.splice( 0, 0, event.target.value );
			} else {
				updatedState = updatedState.filter( value => value !== event.target.value );
			}
			this.setState({
				[event.target.name]: updatedState
			});
		} else 
		if ( event.target.type === 'checkbox' ) {
			this.setState({
				[event.target.name]: event.target.checked
			});
		}
		else {
			this.setState({
				[event.target.name]: event.target.value
			});
		}
	}

	handleFormOnSubmit = event => {
		event.preventDefault();
		console.log(JSON.stringify(this.state));
	}

	render() {

		const checkboxGroup = ['One', 'Two', 'Three'].map( value => {
			return (
				<input type="checkbox" name="checkboxGroup" key={value} value={value} 
					checked={ this.state.checkboxGroup.indexOf(value) > -1 } 
					onChange={this.handleFormOnChange} 
				/>
			);
		});

		const radioGroup = ['Radio One', 'Radio Two', 'Radio Three'].map( value => {
			return (
				<input type="radio" name="radioGroup" key={value} value={value} 
					checked={ this.state.radioGroup === value } 
					onChange={this.handleFormOnChange} 
				/>
			);
		});

		const selectOptions = ['Option 1', 'Option 2', 'Option 3'].map( value => {
			return (
				<option key={value} value={value}>{value}</option>
			);
		});

		return (
			<form ref={this.form} onSubmit={this.handleFormOnSubmit}>

				<label>Text 01</label>
				<input type="text" name="text01" 
					value={this.state.text01} 
					onChange={this.handleFormOnChange} 
				/>

				<label>Text 02</label>
				<input type="text" name="text02" 
					value={this.state.text02} 
					onChange={this.handleFormOnChange} 
				/>

				<input type="checkbox" name="checkbox" value="Happy" 
					onChange={this.handleFormOnChange} 
				/>

				{checkboxGroup}
				{radioGroup}

				<select name="select" 
					value={this.state.select} 
					onChange={this.handleFormOnChange}>
				{selectOptions}
				</select>

				<input type="submit" value="Submit" />
			</form>
		);
	}
}