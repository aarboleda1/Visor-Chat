require('../styles/App.css');
require('../styles/Login.css');

import React from 'react';
import ChatApp from './ChatApp';

class App extends React.Component {
 constructor(props) {
    super(props);
    // set the initial state of the application
    this.state = { username: '' };

    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }

  usernameChangeHandler(event) {
    this.setState({ username: event.target.value });
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  render() {
      return (
        <ChatApp username={this.state.username} />
      );
  }

}
App.defaultProps = {
};

export default App;
