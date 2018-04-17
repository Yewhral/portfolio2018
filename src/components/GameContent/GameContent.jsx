import React, { Component } from 'react';
import prefetchImages from 'prefetch-image';
import GameBackground from '../GameBackground/GameBackground';
import GameLoader from '../Loader/GameLoader';
import TextBox from '../TextBox/TextBox';
import speechesData from '../../resources/data/speeches.json';
import allImages from '../../resources/data/images';
import styles from './GameContent.module.scss';

class GameContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSpeech: {
                id: 0,
                text: 'Hey! How to play this game? Click left button of your mouse to proceed.',
                name: 'Michał',
                photo: '',
                background: '',
            },
            speeches: speechesData,
            loaderVisible: true,
        };
    }

    componentDidMount() {
        prefetchImages(allImages)
            .then(() => {
                this.setState({
                    loaderVisible: false,
                    currentSpeech: this.state.speeches[0],
                    allImages,
                });
            });
    }

    showNextSpeech = () => {
      const { speeches, currentSpeech } = this.state;
      if (currentSpeech.id < speeches.length - 1) {
          const nextSpeech = speeches[currentSpeech.id + 1];
          this.setState({
              currentSpeech: nextSpeech,
          });
      }
    };

    render() {
        const { currentSpeech, speeches, loaderVisible } = this.state;
        return (
            <div
                className={styles.gameContent}
                onClick={this.showNextSpeech}
            >
                {loaderVisible &&
                    <GameLoader />
                }
                <GameBackground
                    background={currentSpeech.background}
                />
                <TextBox
                    currentSpeech={currentSpeech}
                    speeches={speeches}
                />
            </div>
        );
    }
}

export default GameContent;
