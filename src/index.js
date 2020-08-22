import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './scss/tesc-website.scss';
import './globals';

ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById('app')
);
