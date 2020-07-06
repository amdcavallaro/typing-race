import React, {Component} from 'react';

class InputText extends Component {
    render() {
        return (<textarea
            style={{width:'90vw'}}
            autoFocus
            type="text"
            placeholder="Type here"
            value={this.props.inputText}
            onChange={this.props.handleInput}
            onPaste={(e) => {e.preventDefault()}}
        />)
    }
}

export default InputText;
