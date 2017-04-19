import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';
// This is the main display of the application. It shows a list of all the
// messages which have been sent and received during the current chat session.
class Messages extends React.Component {
  render() {
      // Todo: refactor to not use index as key for map
      const messages = this.props.messages.map((message, i) => {
          return (
            <Message
              key={i}
              username={message.username}
              message={message.message}
              fromMe={message.fromMe} />
          );
        });

      return (
        <div className='messages' id='messageList'>
          { messages }
        </div>
      );
  }
}



Messages.propTypes = {
  messages: PropTypes.array.isRequired
}

export default Messages;
