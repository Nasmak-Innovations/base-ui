import React from 'react';
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import test from "./test";
import Main from "./Main";
import SecureRouterWrapper from "../common/Auth/SecureRouterWrapper";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";

const App = (props) => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Main>
						<SecureRouterWrapper>
							<Route path="/" component={Dashboard} exact/>
							<Route path="/inbox" component={test} exact/>
							{/*<Redirect to={"/404"} />*/}
							{/*<Route path={"/404"} component={Error}/>*/}
						</SecureRouterWrapper>
					</Main>
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default App;
