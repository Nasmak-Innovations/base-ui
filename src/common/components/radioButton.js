import React, { Component } from 'react';


class RadioButton extends Component {
        render() {
        let radioOption = this.props["radioValues"];
        return (
            <div>
                {/* <input
                    type={this.props["type"] || "radio"}
                    name={this.props["name"] || "name"}
                    className={this.props.className}
                />
                {this.props["label"] && <label
                    className="float left sm:flex-row">
                    {this.props["label"]}
                </label>} */}
                {radioOption.map((options, index) => (
                    <div key={index}>
                        <input
                            type={this.props["type"] || "radio"}
                            name={this.props["name"] || "name"}
                            className={this.props.className}
                            value={ options}
                        />
                        {options}
                    </div>
                ))}
                {/* <input
                    type={this.props["type"] || "radio"}
                    name={this.props["name"] || "name"}
                    className={this.props.className}
                    value={this.props["radioValues"]}
                />
                {this.props["radioValues"]} */}
            </div>
        );
    }
}

export default RadioButton;