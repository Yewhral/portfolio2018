import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainMenu extends Component {
    render() {
        return (
            <div className="mainMenu">
                <ul>
                    <li><Link to='/game'>Home</Link></li>
                    <li><Link to='/author'>Roster</Link></li>
                    <li><Link to='/info'>Schedule</Link></li>
                </ul>
            </div>
        );
    }
}

export default MainMenu;
