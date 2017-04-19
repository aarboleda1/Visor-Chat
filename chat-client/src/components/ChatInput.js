import React from 'react';

// This component is where the user can type their message and send it
// to the chat room - not connected to server
class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    // Set initial state of the chatInput so that it is not undefined
    this.state = { chatInput: '' };

    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }
    
  textChangeHandler(event)  {
    this.setState({ chatInput: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();

    // Call the onSend callback with the chatInput message
    this.props.onSend(this.state.chatInput);

    this.setState({ chatInput: '' });
  }

  render() {
    return (
      <form className="chat-input" onSubmit={this.submitHandler}>
        <input type="text"
          onChange={this.textChangeHandler}
          value={this.state.chatInput}
          placeholder="Write a message..."
          required />
      </form>
    );
  }
}

ChatInput.defaultProps = {
};

export default ChatInput;
