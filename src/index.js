import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {createBrowserHistory} from 'history';
import {BrowserRouter} from 'react-router-dom';

import App from './core/App';
import * as serviceWorker from './serviceWorker';
import reducer from "./store/reducers/index.js";

export const history = createBrowserHistory()

const store = createStore(reducer, compose(
	applyMiddleware(thunk)
));


ReactDOM.render(
	// <Router>
	<Router history={history}>
		<Provider store={store}>
				<App history={history}/>
		</Provider>
	</Router>, document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
