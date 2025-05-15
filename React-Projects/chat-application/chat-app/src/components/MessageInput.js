
import React, { useState } from 'react';

function MessageInput({ sendMessage }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    sendMessage('User1', 'User2', message);
    setMessage('');
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
export default MessageInput;