import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import test from "./test";
import Main from "./Main";
import SecureRouterWrapper from "../common/Auth/SecureRouterWrapper";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Login from "./auth/login";

const App = (props) => {
	return (
		<>
			<SecureRouterWrapper>
				<Switch>
					<Main>
						<Route path="/" component={Dashboard} exact/>
						<Route path="/inbox" component={test}/>
						<Route path="/login " component={Login}	/>
					</Main>
				</Switch>
			</SecureRouterWrapper>
		</>
	);
};

export default App;
