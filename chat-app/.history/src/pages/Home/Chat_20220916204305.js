import React from 'react';
import ChatTop from '../../components/chat window/top';
import Messages from '../../components/chat window/messages';
import ChatBottom from '../../components/chat window/bottom';

const Chat = () => {
  return (
    <div>
      <div className="chat-top">
        <ChatTop />
      </div>
      <div className="chat-middle">
        <Messages />
      </div>
      <div className="chat-bottom">
        <ChatBottom />
      </div>
    </div>
  );
};

export default Chat;
