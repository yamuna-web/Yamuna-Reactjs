import React, { useState } from 'react';

import MessageInput from './MessageInput';
import Message from './Message';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const sendMessage = (sender, receiver, message) => {
    const newMessage = {
      id: messages.length + 1,
      sender,
      receiver,
      message,
      timestamp: new Date().toISOString(),
      status: 'sent',
    };
    setMessages([...messages, newMessage]);
    setUnreadCount(unreadCount + 1);
  };

  const deleteMessage = (messageID) => {
    setMessages(messages.filter(msg => msg.id !== messageID));
  };

  const searchMessages = (keyword) => {
    return messages.filter(msg => msg.message.includes(keyword));
  };

  return (
    <div className="chat-container"> 
      <div className="message-list">
        {messages.map(msg => (
          <Message key={msg.id} message={msg} onDelete={deleteMessage} />
        ))}
      </div>
      <MessageInput sendMessage={sendMessage} />
    </div>
  );  
  
}
export default Chat;