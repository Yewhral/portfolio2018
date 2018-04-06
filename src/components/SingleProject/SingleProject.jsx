import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import styles from './SingleProject.module.scss';

class SingleProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false,
        };
    }

    componentWillMount() {
        this.setState({
            imageLoaded: false,
        })
    }

    handleLoaded = () => {
        this.setState({
            imageLoaded: true,
        });
    };

    render () {
        const { image, title, updated, url, description } = this.props;
        const { imageLoaded } = this.state;

        return (
            <li className={styles.singleProject}>
                <div>
                    <div>{title}</div>
                    <div>{updated}</div>
                    <div>{url}</div>
                    <div>{description}</div>
                </div>
                <div className={styles.imageContainer}>
                    {!imageLoaded &&
                        <Loader />
                    }
                        <img
                            src={image}
                            alt=''
                            className={styles.image}
                            onLoad={this.handleLoaded}
                        />
                </div>

            </li>
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
