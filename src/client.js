import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// import Profile from './pages/profile';

import App from './app';

ReactDOM.hydrate(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.querySelector('#root')
)