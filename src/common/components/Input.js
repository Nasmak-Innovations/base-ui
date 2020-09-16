import React, {Component} from 'react';

class Input extends Component {
	render() {
		return (
			<div>
				{this.props["label"] && <label
					className="flex flex-col sm:flex-row">
					{this.props["label"]}
					<span
						className="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600">
						{this.props["validationText"] || ""}
					</span>
				</label>}
				<input
					type={this.props["type"] || "text"}
					name={this.props["name"] || "name"}
					className={this.props.className || "input w-full border mt-2"}
					placeholder={this.props["placeholder"] || "John Legend"}
					minLength="2"
					required/>
			</div>
		);
	}
}

export default Input;