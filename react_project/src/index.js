import React from 'react';
import ReactDOM from 'react-dom';
import Default from "./layouts/Default";

import {BrowserRouter as Router,Route} from "react-router-dom"

import './plugins/axios'

import {serverBaseUrl} from './server'
React.baseUrl=serverBaseUrl
React.Component.prototype.baseUrl=serverBaseUrl

ReactDOM.render(
    <Router>
        <Route component={Default}/>
    </Router>,
  document.getElementById('root')
);

