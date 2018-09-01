import React, { Component, Fragment } from 'react';
import { Icon, Loading, Modal, Toggle } from '../Utilities';

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
			return <Loading name="tail-spin" size="32" />;
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
