import React from 'react';

function ExpectedText(props) {
    const expectedText = 'omg hello world';
    const good = props.numberOfCorrectCharacters || 0;
    return (
        <span>
            <span style={{ color: 'green' }}>{expectedText.substr(0, good)}</span>
            <span>{expectedText.substr(good)}</span>
        </span>
    );
}

export default ExpectedText;
