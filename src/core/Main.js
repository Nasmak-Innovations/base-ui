import React, {PureComponent} from 'react';
import SideNav from "../common/globalComponents/sideNav";
import TopBar from "../common/globalComponents/topBar";


class Main extends PureComponent {
	render() {
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