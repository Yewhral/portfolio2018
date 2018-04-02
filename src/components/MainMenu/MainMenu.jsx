import React, { Component } from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';

class MainMenu extends Component {
    render() {
        return (
            <div className="mainMenu">
                <ul>
                    <li>
                        <NavigationLink
                            to='/game'
                            label='game'
                        />
                    </li>
                    <li>
                        <NavigationLink
                            to='/game22'
                            label='game22'
                        />
                    </li>
                    <li>
                        <NavigationLink
                            to='/gameasd'
                            label='gameasd'
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

export default MainMenu;
