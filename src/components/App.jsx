import React, { Component, Fragment } from 'react';
import { Loading, Modal, Toggle } from '../Utilities';

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

				<Toggle>
				{({on, toggle}) => (
					<Fragment>
						<button onClick={toggle}>Toggle</button>
						<Modal on={on} toggle={toggle}>
							<h1>OMIGOD</h1>
						</Modal>
					</Fragment>
				)}
				</Toggle>

			</Fragment>
		);
	}
}
