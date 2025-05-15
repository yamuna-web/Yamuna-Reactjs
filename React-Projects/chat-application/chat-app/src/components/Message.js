import React from 'react';

function Message({ message, onDelete }) {
  return (
    <div>
      <p><strong>{message.sender}</strong>: {message.message}</p>
      <button onClick={() => onDelete(message.id)}>Delete</button>
    </div>
  );

}
export default Message;