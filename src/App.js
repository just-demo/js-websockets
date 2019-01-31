import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      messages: []
    };
  }

  componentDidMount() {
    this.start();
  }

  start() {
    this.setState({started: true});
    const ws = new WebSocket('ws://localhost:8080');
    ws.onopen = () => {
      this.addMessage('Connection opened!');
      ws.send(1);
    };

    ws.onmessage = event => {
      this.addMessage(`Received: ${event.data}`);
      setTimeout(() =>  ws.send(parseInt(event.data) + 1), 1000);
    };

    ws.onclose = () => {
      this.addMessage('Connection closed!');
      this.setState({started: false});
    };
  }

  addMessage(message) {
    this.setState({messages: [...this.state.messages, new Date().toISOString() + ' ' + message]});
  }

  render() {
    return (
      <div>
        <button onClick={() => this.start()} disabled={this.state.started}>Start</button>
        {this.state.messages.map((message, index) => (
            <div key={index}>{message}</div>
        ))}
      </div>
    );
  }
}

export default App;
