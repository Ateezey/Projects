import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {browserHistory} from 'react-router';


class UI extends Component {
  render() {
    return (

    	<MuiThemeProvider>
         	<Nav />  
        </MuiThemeProvider>

    	);
	}
}
export default UI;
injectTapEventPlugin();