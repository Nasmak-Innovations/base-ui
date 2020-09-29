import React, {PureComponent} from 'react';

class Button extends PureComponent {
	render() {
		return (
			<button type="submit" className={this.props["className"] || "button bg-theme-1 text-white mt-5"}>{this.props["text"]}</button>
		);
	}
}

export default Button;