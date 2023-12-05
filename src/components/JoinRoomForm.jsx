import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
const JoinRoomForm = () => {
  const [roomName, setRoomName] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const handleJoinRoom = () => {
    // Add your logic for joining the room here
    // For simplicity, let's just log the room name and username for now
    if(!roomName || !username)
    {
       alert("Inputs Missing");
    }
    console.log(`Joining room: ${roomName} as ${username}`);
    navigate(`/room/${roomName}?user=${username}`)

  };

  return (
    <div style={containerStyles}>
      <div style={formStyles}>
        <h2 style={headerStyles}>Create Room : </h2>
        <label style={labelStyles}>Room Name:</label>
        <input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          style={inputStyles}
          placeholder="Enter room name"
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

export default JoinRoomForm;
