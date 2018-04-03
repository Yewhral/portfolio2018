import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './views/Routes/Routes';
import registerServiceWorker from './services/registerServiceWorker';
import './resources/styles/index.scss';

ReactDOM.render((
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
