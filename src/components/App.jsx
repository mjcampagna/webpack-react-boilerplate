import React, { Component, Fragment } from 'react';
import Loading from './Loading';

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
		}, 500);
	}

	render() {
		if ( this.state.isLoading ) {
			return <Loading spinner="puff" color="#33AAFF" />;
		}
		return (
			<p>I am App.</p>
		);
	}
}
