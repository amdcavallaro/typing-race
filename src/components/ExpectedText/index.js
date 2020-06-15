import React from 'react';

function ExpectedText(props) {
    const expectedText = props.expectedText;
    const good = props.numberOfCorrectCharacters || 0;
    const bad = props.numberOfIncorrectCharacters || 0;
    return (
        <span>
            <span style={{ color: 'green' }}>{expectedText.substr(0, good)}</span>
            <span style={{ color: 'red' }}>{expectedText.substr(good, bad)}</span>
            <span>{expectedText.substr(good+bad)}</span>
        </span>
    );
}

export default ExpectedText;
