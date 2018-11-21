import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import Menu from './Components/Menu';

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Route exact path = '/' component = { App } />
            <Route exact path = '/menu' component = { Menu } />
        </div>
</BrowserRouter>, document.getElementById('app'));