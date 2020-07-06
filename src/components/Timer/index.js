import React, {Component} from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: null
        };
    }

    isStarted() {
      return this.props.startTime !== null;
    }

    isFinished() {
      return this.props.endTime !== null;
    }

    howLongItTook() {
      return (this.props.endTime - this.props.startTime) / 1000;
    }

    howLongItTookSoFar() {
      return (this.state.currentTime - this.props.startTime) / 1000;
    }

    // when component starts, tell it to update timer every now and then
    componentDidMount() {
      this.intervalId = setInterval(this.updateTimer, 100);
    }

    componentWillUnmount() {
      clearInterval(this.intervalId);
    }

    updateTimer = () => {
      this.setState({ currentTime: new Date() })
    }

    render(){
        if (this.isFinished()) {
            return <p>Finished challenge in {this.howLongItTook()}s</p>
        } else if (this.isStarted()) {
          return <p>Timer is {this.howLongItTookSoFar()}s</p>
        } else {
          return <p>Not started yet</p>
        }
    }
}
export default Timer;
