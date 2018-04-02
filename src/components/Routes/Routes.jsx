import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainMenu from './../MainMenu/MainMenu';

class Routes extends Component {
    render() {
        return (
            <div className="routes">
                <Route exact path='/' component={MainMenu}/>
            </div>
        );
    }
}

export default Routes;
