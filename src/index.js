import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './resources/styles/index.scss';
import MainMenu from './components/MainMenu';
import registerServiceWorker from './services/registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
        <MainMenu />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
