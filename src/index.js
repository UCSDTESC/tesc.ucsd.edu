import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes';
import './scss/tesc-website.scss';

import $ from 'jquery';
window.jQuery = window.$ = $;

ReactDOM.render((
    <BrowserRouter basename="/staging/">
        <Routes />
    </BrowserRouter>
), document.getElementById('app'));
