import React, {Component} from 'react';

class InputText extends Component {
    render() {
        return (<input autoFocus type="text" placeholder="Type here" value={this.props.inputText} onChange={this.props.handleInput} />)
    }
}

export default InputText;
