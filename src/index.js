import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const $container = document.getElementById('app-container');
$container ? ReactDOM.render(<App />, $container) : false;
