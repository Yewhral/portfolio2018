import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainMenu from './../MainMenu/MainMenu';
import Game from './../Game/Game';
import Author from './../Author/Author';
import Portfolio from './../Portfolio/Portfolio';

class Routes extends Component {
    render() {
        return (
            <div className="routes">
                <Route exact path='/' component={MainMenu}/>
                <Route path='/game' component={Game}/>
                <Route path='/author' component={Author}/>
                <Route path='/portfolio' component={Portfolio}/>
            </div>
        );
    }
}

export default Routes;
