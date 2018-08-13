import React, { Component, Fragment } from 'react';

import Portal from '../Portal';

export default class Modal extends Component {
	componentDidMount() {
	}

	render() {
		const { children, on, toggle } = this.props;
		return (
			<Portal>
				{on && (
					<div id="modal-overlay">
						<div id="modal-background" onClick={toggle}></div>
						<div id="modal-card">
							<button id="modal-button-close" onClick={toggle}>Close</button>
							{children}
						</div>
					</div>
				)}
			</Portal>
		);
	}
}
