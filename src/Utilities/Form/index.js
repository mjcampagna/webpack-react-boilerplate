import React, { Component, Fragment } from 'react';
import './style.css';

export default class Form extends Component {
	state = {

		text01: '',
		text02: '', 
		checkbox: true,
		checkboxGroup: ['Two', 'Three'],
		radioGroup: 'Radio One', 
		select: 'Option 2', 
		textarea: ''

	}

	handleFormOnChange = event => {
		const target = event.target;
		console.log( target.readonly )
		if ( target.type === 'checkbox' && Array.isArray(this.state[target.name]) ) {
			let updatedState = this.state[target.name].slice();
			if ( target.checked ) {
				updatedState.splice( updatedState.length, 0, target.value );
			} else {
				updatedState = updatedState.filter( value => value !== target.value );
			}
			this.setState({
				[target.name]: updatedState
			});
		} else 
		if ( target.type === 'checkbox' ) {
			this.setState({
				[target.name]: target.checked
			});
		} else {
			this.setState({
				[target.name]: target.value
			});
		}
	}

	handleFormOnSubmit = event => {
		event.preventDefault();
		console.log( JSON.stringify(this.state) );
	}

	render() {

		const checkboxGroup = ['One', 'Two', 'Three'].map( value => {
			return (
				<label key={value} htmlFor={value}><input type="checkbox" 
					name="checkboxGroup" id={value} value={value} 
					checked={ this.state.checkboxGroup.indexOf(value) > -1 } 
					onChange={this.handleFormOnChange} 
				/>{value}</label>
			);
		});

		const radioGroup = ['Radio One', 'Radio Two', 'Radio Three'].map( value => {
			return (
				<label key={value} htmlFor={value}><input type="radio" 
					name="radioGroup" value={value} 
					checked={ this.state.radioGroup === value } 
					onChange={this.handleFormOnChange} 
				/>{value}</label>
			);
		});

		const selectOptions = ['Option 1', 'Option 2', 'Option 3'].map( value => {
			return (
				<option key={value} value={value}>{value}</option>
			);
		});

		return (
			<form ref={this.form} onSubmit={this.handleFormOnSubmit}>

				<div>
					<label>Text 01</label>
					<input type="text" name="text01" 
						value={this.state.text01} 
						onChange={this.handleFormOnChange} 
					/>
				</div>

				<div>
					<label>Text 02</label>
					<input type="text" name="text02" 
						value={this.state.text02} 
						onChange={this.handleFormOnChange} 
					/>
				</div>

				<div>
					<label><input type="checkbox" name="checkbox" value="Happy" 
						onChange={this.handleFormOnChange} 
					/>Single Checkbox</label>
				</div>

				<div>
					<input type="checkbox" name="checkbox" value="Sad" id="Sad" 
						onChange={this.handleFormOnChange} 
					/>
					<label htmlFor="Sad">Single Checkbox</label>
				</div>

				{checkboxGroup}

				{radioGroup}

				<select name="select" value={this.state.select} onChange={this.handleFormOnChange}>
					{selectOptions}
				</select>

				<textarea name="textarea" value={this.state.textarea}
					onChange={this.handleFormOnChange} 
				></textarea>

				<input type="submit" value="Submit" />
			</form>
		);
	}
}
