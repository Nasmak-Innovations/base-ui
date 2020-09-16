import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";

class Error extends PureComponent {
	render() {
		return (
			<div className="container">
				{/*BEGIN: Error Page*/}
				<div
					className="error-page flex flex-col lg:flex-row items-center justify-center h-screen text-center lg:text-left">
					<div className="-intro-x lg:mr-20">
						<img alt="Midone Tailwind HTML Admin Template" className="h-48 lg:h-auto"
							 src="dist/images/error-illustration.svg" />
					</div>
					<div className="text-white mt-10 lg:mt-0">
						<div className="intro-x text-6xl font-medium">404</div>
						<div className="intro-x text-xl lg:text-3xl font-medium">Oops. This page has gone missing.</div>
						<div className="intro-x text-lg mt-3">You may have mistyped the address or the page may have
							moved.
						</div>
						<Link to={"/"} className="intro-x button button--lg border border-white mt-10">Back to Home</Link>
					</div>
				</div>
				{/*END: Error Page */}
			</div>
		);
	}
}

export default Error;