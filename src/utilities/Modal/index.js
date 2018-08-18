import React, { Component, Fragment } from 'react';
import { Transition, animated } from 'react-spring';
import { Icon, Portal } from '../';

export default class Modal extends Component {
	render() {
		const { children, on, toggle } = this.props;
		return (
			<Portal>
				<Transition
					native 
					from={{
						opacity: 0
					}} 
					enter={{
						opacity: 1
					}} 
					leave={{
						opacity: 0
					}}
				>
					{on && ( styles => (
						<animated.div id="modal-overlay" style={styles}>
							<div id="modal-background" onClick={toggle}></div>
							<div id="modal-card">
								<button id="modal-button-close" onClick={toggle}>
									<Icon name="close" />
								</button>
								{children}
							</div>
						</animated.div>
					) )}
				</Transition>
			</Portal>
		);
	}
}
