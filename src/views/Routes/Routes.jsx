import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Author from '../Author/Author';
import Game from './../Game/Game';
import ProjectDetails from './../ProjectDetails/ProjectDetails';
import Portfolio from './../Portfolio/Portfolio';

class Routes extends Component {
    render() {
        return (
            <div className="routes">
                <Route exact path='/' component={ProjectDetails}/>
                <Route path='/author' component={Author}/>
                <Route path='/game' component={Game}/>
                <Route path='/project' component={ProjectDetails}/>
                <Route path='/portfolio' component={Portfolio}/>
            </div>
        );
    }
}

export default Routes;
