import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthorInfoBox from '../InfoBox/AuthorInfoBox';
import ProjectInfoBox from '../InfoBox/ProjectInfoBox';
import menuBg from '../../resources/images/menu_bg.jpg';
import styles from './SideBox.module.scss';

class SideBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false,
        };
    }

    handleLoaded = () => {
        this.setState({
            imageLoaded: true,
        });
    };

    render () {
        const { screen } = this.props;
        const { imageLoaded } = this.state;

        return (
            <div className={styles.sideBox}>
                <img
                    src={menuBg}
                    alt=''
                    className={styles.image}
                    onLoad={this.handleLoaded}
                    style={imageLoaded ? {} : {display: 'none'}}
                />
                {screen === 'author' ?
                    <AuthorInfoBox />
                    :
                    <ProjectInfoBox />
                }
            </div>
        )
    }

}

SideBox.defaultProps = {
    screen: 'author',
};

SideBox.propTypes = {
    screen: PropTypes.string,
};

export default SideBox;
