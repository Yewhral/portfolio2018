import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SingleProject.module.scss';

class SingleProject extends Component {
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
        const { image, title, url, description } = this.props;
        const { imageLoaded } = this.state;

        return (
            <div className={styles.sideBox}>
                <img
                    src='http://res.cloudinary.com/doethe/image/upload/q_80/v1522925386/menu_bg_mrwttw.jpg'
                    alt=''
                    className={styles.image}
                    onLoad={this.handleLoaded}
                    style={imageLoaded ? {} : {display: 'none'}}
                />
            </div>
        )
    }

}

SingleProject.defaultProps = {
    image: '',
    title: '',
    url: '',
    description: '',
};

SingleProject.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
};

export default SingleProject;
