'use strict';

import React from 'react';
import cx from 'classnames'; /** you need to npm install --save-dev classnames this **/
/**
 * ReactJS & ES2015 Cookies Pop Up Component
 *  A pop up to inform the user that cookies are used on a/this site.
 *
 * Usage: <Cookies />
 *
 * you cal also override the message and the expiry time:
 * <Cookies message="ADD MESSAGE HERE" expires={ADD EXPIRY VALUE HERE}/>
 *
 * @param message {string} optionl prop type
 * @param expires {number} optionl prop type
 *
 * @author Simon Davies
 * @module components/Cookies
 */
export default class Cookies extends React.Component {
	constructor() {
		super();

		this.state = {
			cookieName: 'cookiePopup',
			message:
				'We use cookies to ensure that we give you the best experience on our website. By selecting to close this alert, you are agreeing to allowing this site to use cookies.',
			expiresIn: 365,
			cookieSet: false
		};
	}
	/* check for the cookie on init/mounting */
	componentWillMount() {
		//-- lets one overwrite several settings with any props that are set externally
		if (this.props.message) this.setState({ message: this.props.message });
		if (this.props.expires) this.setState({ expiresIn: this.props.expires });
		//-- now check for the cookie
		this._checkCookie();
	}
	/* Close the pop up message on click event action */
	closeMessage(evt) {
		evt.preventDefault();
		this.setState({ cookieSet: true });
	}
	/* main reactjs render method / @return {object} */
	render() {
		/* enable the setting of the visual class(s) */
		var classes = cx({
			'cookies-wrapper': true,
			dismiss: this.state.cookieSet
		});

		return (
			<div className={classes}>
				<div className="cookies-message">{this.state.message}</div>
				<div className="button-wrapper">
					<button id="close-button" type="button" onClick={this.closeMessage.bind(this)}>
						&times;
					</button>
				</div>
			</div>
		);
	}

	/* check for a existing cookie */
	_checkCookie() {
		//-- get the required cookie
		let cookie = this._getCookie();
		//-- check if we do have a cookie already set
		if (cookie !== '') {
			this.setState({ cookieSet: true });
			return;
		}
		//-- if not lets display message and set it
		this._setCookie();
	}
	/* set the cookie */
	_setCookie() {
		var d = new Date(),
			cvalue = this._setCookieValue();
		d.setTime(d.getTime() + this.state.expiresIn * 24 * 60 * 60 * 1000);
		let expires = 'expires=' + d.toUTCString();
		document.cookie = this.state.cookieName + '=' + cvalue + '; ' + expires;
	}
	/* set the cookie value /  @return {string} */
	_setCookieValue() {
		var a = () => {
			return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1);
		};
		return a() + a() + '-' + a() + '-' + a() + a() + a();
	}
	/* get the cookies and searh for ours / @return {string} */
	_getCookie() {
		var name = this.state.cookieName + '=';
		var ca = document.cookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return '';
	}
}
