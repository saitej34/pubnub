import React, { useState, useEffect } from 'react';
import { usePubNub } from 'pubnub-react';
import { v4 as uuidv4 } from 'uuid';
import './Chat.css';

const Chat = ({ roomid }) => {
  const user = new URLSearchParams(window.location.search).get('user');
  const pubnub = usePubNub();
  const [channels] = useState([roomid]);
  const [messages, addMessage] = useState([]);
  const [message, setMessage] = useState('');

  const handleMessage = (event) => {
    const receivedMessage = event.message;
    addMessage((prevMessages) => [...prevMessages, receivedMessage]);
  };

  useEffect(() => {
    pubnub.subscribe({ channels });
    pubnub.addListener({ message: handleMessage });

    const joinMessage = {
      type: 'USER JOINED',
      user: 'System',
      message: `${user} joined the room.`,
    };
    pubnub.publish({ channel: channels[0], message: joinMessage });

    return () => {
      pubnub.unsubscribeAll();
      pubnub.removeListener({ message: handleMessage });
    };
  }, [pubnub, channels, user]);

  const sendMessage = (text) => {
    if (text) {
      const newMessage = {
        type: 'NEW MESSAGE',
        user: user,
        message: text,
      };

      pubnub.publish({ channel: channels[0], message: newMessage }).then(() => setMessage(''));
    }
  };

  return (
    <div>
      <div className="chat-container">
        {messages.map((msg, index) => (
          <div key={index} className={msg.type === 'USER JOINED' ? 'join-message' : (msg.user === user ? 'user-message' : 'other-message')}>
            {msg.type === 'USER JOINED' ? (
              <em>{msg.message}</em>
            ) : (
              <>
                <strong>{msg.user}:</strong> {msg.message}
              </>
            )}
          </div>
        ))}
      </div>
      <input type="text" onChange={(e) => setMessage(e.target.value)} placeholder="Type your Message" />
      <button
        onClick={(e) => {
          e.preventDefault();
          sendMessage(message);
        }}
      >
        Send Message
      </button>
    </div>
  );
};

export default Chat;
