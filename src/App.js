import React, { Component } from 'react';
import './App.css';
import MatchTexts from './components/MatchTexts/index';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Typing Game</p>
                    <MatchTexts inputText={this.props.inputText} />
                </header>

                <p>
                    so what do we do? so let's say we have: - text user typed "console.lol('omg" - text user was
                    supposed to type "console.log('hello, world')" - some component that takes both and displays it in
                    colors does that make sense for a start?
                </p>
            </div>
        );
    }
}

export default App;
