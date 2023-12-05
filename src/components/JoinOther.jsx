// JoinRoomPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const JoinRoomPage = () => {
  const { roomid } = useParams();
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const handleJoinRoom = () => {
    if (!username) {
      alert("Enter a username!");
      return;
    }

    navigate(`/room/${roomid}?user=${username}`);
    console.log(`Joining room: ${roomid} as ${username}`);
  };

  return (
    <div style={containerStyles}>
      <div style={formStyles}>
        <h2 style={headerStyles}>Join Room</h2>
        <label style={labelStyles}>Room Name:</label>
        <input
          type="text"
          value={roomid}
          disabled
          style={inputStyles}
          placeholder="Room name"
        />
        <label style={labelStyles}>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyles}
          placeholder="Enter username"
        />
        <button style={buttonStyles} onClick={handleJoinRoom}>
          Join Room
        </button>
      </div>
    </div>
  );
};

// Styles (use the styles from your previous component or modify as needed)
// ...

export default JoinRoomPage;



// Styles
const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#3498db', // Blue background color
  };
  
  const formStyles = {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff', // White background color
  };
  
  const headerStyles = {
    color: '#3498db', // Blue color
  };
  
  const labelStyles = {
    display: 'block',
    margin: '10px 0',
    color: '#333', // Dark text color
  };
  
  const inputStyles = {
    width: '100%',
    padding: '8px',
    margin: '5px 0',
    boxSizing: 'border-box',
  };
  
  const buttonStyles = {
    backgroundColor: '#3498db', // Blue button color
    color: '#fff', // White text color
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
