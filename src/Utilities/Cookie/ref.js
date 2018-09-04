import React, { Component, Fragment } from 'react';
import { Transition, animated } from 'react-spring';
import { Icon, Portal } from '../';

export default class Cookie extends Component {

	setCookie = (name, value, daysUntilExpiry) => {
		let expires = new Date();
		expires.setTime(expires.getTime() + (daysUntilExpiry * 24 * 60 * 60 * 1000));
		const cookie = document.cookie = name + '=' + value + '; expires=' + expires + '; path=/';
		return cookie;
	}

	getCookie = name => {
		name = name + '=';
		const cookies = document.cookie.split(';');
		for ( let i = 0; i < cookies.length; i += 1 ) {
			let cookie = cookies[i];
			if (cookie.charAt(0) === ' ') {
				cookie = cookie.substring(1);
			}
			if (cookie.indexOf(name) > -1) {
				return cookie.substring(name.length, cookie.length);
			}
		}
		return '';
	}

	deleteCookie = name => {
		const value = this.checkCookie(name);
		if ( value ) {
			const cookie = document.cookie = name + '=' + value + '; expires=' + new Date() + '; path=/';
			return cookie;
		}
		return false;
	}

	checkCookie = name => {
		let cookie = this.getCookie(name);
		if ( cookie !== '' ) {
			return cookie;
		} else {
			return false;
		}
	}

	componentDidMount = () => {
		// console.log(
		// 	this.setCookie('allowCookies', 'true', 365)
		// )
		// console.log(
		// 	this.checkCookie('allowCookies')
		// )
	}

	render() {
		return (
			<Portal>
				<p>...</p>
			</Portal>
		);
	}
}
