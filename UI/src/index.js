import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Routes from './routes';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();