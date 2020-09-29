import React, {Component} from 'react';

class Submit extends Component {
	render() {
		return (
			<button type="submit" className={this.props["className"] || "button bg-theme-1 text-white mt-5"}>{this.props["text"]}</button>
		);
	}
}

export default Submit;