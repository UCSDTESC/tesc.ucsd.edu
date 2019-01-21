import React from 'react';
import {render} from 'react-snapshot';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes';

import './scss/tesc-website.scss';
import './globals';
import './fullcalendar.min.css';
import './gcal';

render((
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
), document.getElementById('app'));
