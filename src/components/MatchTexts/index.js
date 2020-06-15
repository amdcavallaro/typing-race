import React, { Component } from 'react';
import InputText from '../InputText/index';
import ExpectedText from '../ExpectedText/index';
import TextSamples from '../../TextSamples.json';

class MatchTexts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            expectedText: TextSamples[Math.floor(Math.random()*TextSamples.length)]
        };
    }

    handleInput = (event) => {
        this.setState({
            inputText: event.target.value,
        });
    };

    calculateNumberOfCorrectCharacters = () => {
        let charactersTyped = this.state.inputText.length;
        let i = 0;
        for(i=0; i<charactersTyped; i++) {
            if (this.state.inputText.charAt(i) === this.state.expectedText.charAt(i)) {
                // continue
            } else {
                break;
            }
        }
        return i;
    }

    calculateNumberOfIncorrectCharacters = () => {
        return this.state.inputText.length - this.calculateNumberOfCorrectCharacters();
    }

    isFinished = () => {
        return this.state.inputText === this.state.expectedText;
    }

    render() {
        return (
            <div>
                <p id="expectedText">
                    <ExpectedText
                        expectedText={this.state.expectedText}
                        numberOfCorrectCharacters={this.calculateNumberOfCorrectCharacters()}
                        numberOfIncorrectCharacters={this.calculateNumberOfIncorrectCharacters()}
                    />
                </p>
                <p id="inputText">
                    <InputText handleInput={this.handleInput} />
                </p>
                {
                    this.isFinished() && <p>HURRAY 🥳</p>
                }
            </div>
        );
    }
}

export default MatchTexts;
