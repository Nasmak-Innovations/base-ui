import React, { Component } from "react";
import Input from '../common/components/Input';
import Select from '../common/components/Select'
import RadioButton from '../common/components/radioButton'


//const radioValues = ["Male","Female","others" ]
export default class Test extends Component {
	render() {
		return (

			<form class="validate-form">
				<Input label="user name" placeholder="Enter Name" type="text" validationText="mini 2 char" />
				<RadioButton   type="radio" radioValues={ ["blue","orange","red","green","white" ]} />
				<Select  value={["car","bike","bus"]}/>
			</form>

		);
	}
}
