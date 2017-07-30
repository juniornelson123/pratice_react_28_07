import React, { Component } from 'react'

import {HashRouter, Route, Switch, Redirect, hashHistory} from 'react-router-dom'

import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'

import Home from '../home/home'

import createHistory from 'history/createBrowserHistory'


const history = createHistory()


export default class Routes extends Component{
	render(){
		return(
			<HashRouter history={history}>
				<Switch>
					<Route path='/home' component={Home} />
					<Redirect from="*" to="/home" />
				</Switch>
			</HashRouter>
		)
	}
}