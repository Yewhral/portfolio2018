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
            backlog: [{
                name: 'Michał',
                text: 'Hey! How to play this game? Click left button of your mouse to proceed.',
            }],
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

    showNextSpeech = (nextId) => {
      const { speeches, currentSpeech } = this.state;
      if (currentSpeech.id < speeches.length - 1) {
          this.updateBacklog(currentSpeech);
          const nextSpeech = speeches.find((speech) => {
              return speech.id === nextId;
          });
          this.setState({
              currentSpeech: nextSpeech,
          });
          this.updateBacklog(nextSpeech);
      }
    };

    updateBacklog = (speech) => {
        this.setState({
            backlog: [
                ...this.state.backlog,
                {
                    text: speech.text,
                    name: speech.name,
                }],
        });
    };

    render() {
        const { currentSpeech, speeches, loaderVisible, backlog } = this.state;
        return (
            <div
                className={styles.gameContent}
                onClick={() => this.showNextSpeech(currentSpeech.nextId)}
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
                    backlog={backlog}
                />
            </div>
        );
    }
}

export default GameContent;
