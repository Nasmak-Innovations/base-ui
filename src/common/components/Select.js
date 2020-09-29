import React, {Component} from 'react';

class Select extends Component {

	_prepareOptions = () => {
		if (this.props["data"]) {
			return this.props["data"].map(elem => {
				return <option value={elem["value"]}>{elem["label"]}</option>
			})
		}
	}

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
				<div className="mt-2">
					<select className="select2 w-full border" multiple={this.props["multiple"] || false}>
						{this.props["default"] && <option value="">Select...</option>}
						{this._prepareOptions()}
					</select>
				</div>
			</div>
		);
	}
}

export default Select;