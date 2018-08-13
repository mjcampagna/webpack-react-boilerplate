import React, { Component, Fragment } from 'react';
import Loading from './Loading';
import Portal from './Portal';

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
			<Fragment>
				<p>I am App.</p>

				<Portal>
					<h1>I'm in a portal!</h1>
				</Portal>

			</Fragment>
		);
	}
}
