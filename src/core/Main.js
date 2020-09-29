import React, {Component} from 'react';
import SideNav from "../common/globalComponents/sideNav";
import TopBar from "../common/globalComponents/topBar";


class Main extends Component {
	render() {
		const items = [
			{ name: 'home', label: 'Home' },
			{
				name: 'billing',
				label: 'Billing',
				items: [
					{ name: 'statements', label: 'Statements' },
					{ name: 'reports', label: 'Reports' },
				],
			},
			{
				name: 'settings',
				label: 'Settings',
				items: [{ name: 'profile', label: 'Profile' }],
			},
		]
		return (
			<>
				<SideNav/>
				<div className="content">
					<TopBar/>
					{this.props.children}
				</div>
			</>
		);
	}
}

export default Main;