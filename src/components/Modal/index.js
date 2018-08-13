import React, { Component, Fragment } from 'react';

import Icon from '../../utilities/Icon.js';
import Portal from '../Portal';

export default class Modal extends Component {
	render() {
		const { children, on, toggle } = this.props;
		return (
			<Portal>
				{on && (
					<div id="modal-overlay">
						<div id="modal-background" onClick={toggle}></div>
						<div id="modal-card">
							<button id="modal-button-close" onClick={toggle}>
								<Icon name="close" />
							</button>
							{children}
						</div>
					</div>
				)}
			</Portal>
		);
	}
}
