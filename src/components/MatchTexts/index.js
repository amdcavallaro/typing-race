import React, { Component } from 'react';
import InputText from '../InputText/index';
import ExpectedText from '../ExpectedText/index';
import TextSamples from '../../TextSamples.json';
import Timer from '../Timer/index';

class MatchTexts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            expectedText: TextSamples[Math.floor(Math.random()*TextSamples.length)],
            startTime: null, // when user started typing
            endTime: null, // when user finished typing
        };
    }

    handleInput = (event) => {
        let newText = event.target.value;
        this.setState({
            inputText: newText,
        });

        // if timer not started yet, start it now
        if (this.state.startTime === null) {
            this.setState({startTime: new Date()})
        }

        // if user finished, record endTime
        if (newText === this.state.expectedText) {
            this.setState({endTime: new Date()})
        }
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
                <Timer startTime={this.state.startTime} endTime={this.state.endTime} />
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
                    this.isFinished() && <p >HURRAY <span aria-label="image" role="img">🥳</span></p>
                }

            </div>
        );
    }
}

export default MatchTexts;
