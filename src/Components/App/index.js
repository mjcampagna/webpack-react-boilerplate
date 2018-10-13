import React, { Component } from 'react';
import { Loading } from '../../Utilities';
import './style.css';

import Demo from '../Demo';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoading: false
			})
		}, 250);
	}

	render() {
		if ( this.state.isLoading ) {
			return <Loading name="spinner" color="#191919" size={32} />;
		}
		return (
			<Demo />
		);
	}
}
