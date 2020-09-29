import React, {Component} from "react";
import Select from "../common/components/Select";
import DataTable from "../common/components/DataTable";
import Input from "../common/components/Input";


export default class Test extends Component {
	render() {
		return (
			<>
				<h2 className="intro-y text-lg font-medium mt-10">
					Data List Layout
				</h2>
				<div className="grid">
					<div className="grid grid-cols-6">
						<Input label={"name"}/>
					</div>
					<div className="grid grid-cols-6">
						<Select label={"Test Data"} default={true} data={[{label: "kamran", value: "name"}]}/>
					</div>
				</div>
				<div className="grid grid-cols-12 gap-6 mt-5">
					<DataTable/>
				</div>
			</>
		);
	}
}
