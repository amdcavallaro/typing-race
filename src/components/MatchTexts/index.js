import React, { Component } from 'react';
import InputText from '../InputText/index';
import ExpectedText from '../ExpectedText/index';

class MatchTexts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
        };
    }

    handleInput = (event) => {
        this.setState({
            inputText: event.target.value,
        });
    };

    calculateNumberOfCorrectCharacters = () => {
      return this.state.inputText.length;
        // let i = 0;
        // if (this.state.inputText.charAt(i) === this.state.expectedText.charAt(i)) {
        //     return i;
        // }
        // return i;
    }

    render() {
        return (
            <div>
                <p id="expectedText">
                    <ExpectedText numberOfCorrectCharacters={this.calculateNumberOfCorrectCharacters()} />
                </p>
                <p id="inputText">
                    <InputText handleInput={this.handleInput} />
                </p>
            </div>
        );
    }
}

export default MatchTexts;
