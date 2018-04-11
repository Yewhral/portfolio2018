import React, { Component } from 'react';
import TextBox from '../TextBox/TextBox';
//import speeches from '../../resources/data/speeches.json';
import styles from './GameContent.module.scss';

class GameContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: '',
            currentSpeech: {
                id: '',
                text: '',
                name: '',
                pic: '',
            },
            speeches: [],

        };
    }

    componentWillMount() {
        const allSpeeches = [
            {   id: 0,
                text: 'jeden',
                name: '',
                pic: '',
            },
            {   id: 1,
                text: 'dwa',
                name: '',
                pic: '',
            },
            {   id: 2,
                text: 'trzy',
                name: '',
                pic: '',
            },
        ];
        this.setState({
            speeches: allSpeeches,
        }, () => {
            this.setState({
                currentSpeech: this.state.speeches[0]
            })
        })
    }

    showNextSpeech = () => {
      const { speeches, currentSpeech } = this.state;
      if (currentSpeech.id < speeches.length - 1) {
          const nextSpeech = speeches[currentSpeech.id + 1];
          this.setState({
              currentSpeech: nextSpeech,
          })
      }
    };

    render() {
        const { currentSpeech } = this.state;
        return (
            <div
                className={styles.gameContent}
                onClick={this.showNextSpeech}
            >
                Game
                <TextBox
                    currentSpeech={currentSpeech}
                />
            </div>
        );
    }
}

export default GameContent;
