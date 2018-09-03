import React, { Component, Fragment } from 'react';
import { Transition, animated } from 'react-spring';
import { Icon, Portal } from '../';

import './style.css';

export default class Modal extends Component {

	componentDidUpdate() {
		if ( this.props.on ) {
			document.body.classList.add('overflow-hidden');
		} else {
			if ( document.body.classList.contains('overflow-hidden') ) {
				document.body.classList.remove('overflow-hidden');
			}
		}
	}

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
						opacity: 0, cursor: 'default', pointerEvents: 'none'
					}}
				>
					{on && ( styles => (
						<animated.div id="modal-container" style={styles}>
							<div id="modal-background"></div>
							<div id="modal-inner">
								<div id="modal-exit" onClick={toggle}></div>
								<div id="modal-card">
									<button id="modal-button--close" onClick={toggle}>
										<Icon name="close" />
									</button>
									{children}
								</div>
							</div>
						</animated.div>
					) )}
				</Transition>
			</Portal>
		);
	}
}
