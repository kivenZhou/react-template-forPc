import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()


import Home from '../pages/Home'
import Register from '../pages/Register'


const RouteConfig = ()=> (
	<Router history={history}>
		<div>
			<Route exact path="/" component={Home}/>
			<Route path="/register" component={Register}/>
		</div>
	</Router>
)

export default RouteConfig