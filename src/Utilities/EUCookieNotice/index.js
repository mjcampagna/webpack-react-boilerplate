import React, { Component, Fragment } from 'react';
import { Transition, animated } from 'react-spring';
import Portal from '../Portal';
import Cookie from '../Cookie';
import './style.css';

class EUCookieNotice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			accepted: false
		}
	}

	componentDidMount = () => {
		if ( this.props.checkCookie('allowCookies') ) {
			this.setState({
				accepted: true
			})
		}
	}

	handleAcceptance = (e) => {
		e.preventDefault();
		this.setState({
			accepted: true
		}, () => {
			this.props.setCookie('allowCookies', true, 365);
		});
	}

	handleRevoke = (e) => {
		e.preventDefault();
		this.setState({
			accepted: false
		}, () => {
			this.props.deleteCookie('allowCookies');
		});
	}

	render() {
		return (
			<Fragment>
				<button onClick={this.handleRevoke}>Revoke Cookies</button> 
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
						}}>
					{ !this.state.accepted && ( styles => (
						<animated.div id="eu-cookie-notice" style={styles}>
							<button onClick={this.handleAcceptance}>Okay</button>
							<p>To ensure the best possible experience for visitors, this site uses cookies.</p>
						</animated.div>
					) )}
					</Transition>
				</Portal>
			</Fragment>
		);
	}
}

const AcceptCookies = Cookie(EUCookieNotice);
export default AcceptCookies;
