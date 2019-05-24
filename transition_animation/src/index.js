import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './app/App';
// import App from './demoApp1';
// import App from './demoApp2';
// import App from './demoApp3';
// import App from './demoApp4';
import App from './demoApp5';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
