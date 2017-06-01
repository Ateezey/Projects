import React, { Component } from 'react';
import UI from './UI.jsx';
import Home from './Home';
import Login from './Login';
import { browserHistory} from 'react-router';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {createHistory} from 'history';
import {createBrowserHistory} from 'history/createBrowserHistory.js';






class Routes extends React.Component {
  render() {
      
    return (
    	<Router history={browserHistory} routes={Routes}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/UI" component={UI}/>
        </div>
      </Router>
    );
  
}}
export default Routes;