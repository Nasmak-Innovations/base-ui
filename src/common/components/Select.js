import React, { Component } from 'react';

class Select extends Component {
    render() {
        const selectList = this.props["value"]
       // console.log("list....", selectList)
        return (
            <div>
                <select
                    name={this.props["name"] || "name"}
                    className={this.props.className}>
                    <optgroup
                        label={this.props["label"] || "Choose..."}>
                        {selectList.map((list, index) => (
                            //console.log("list....", list);
                            <option value={list}> {list}</option>
                        ))}
                    </optgroup>
                </select>
            </div>
        );
    }
}
export default Select;