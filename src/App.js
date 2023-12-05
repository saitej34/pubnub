import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JoinRoomForm from './components/JoinRoomForm';
import JoinOther from './components/JoinOther';
import Room from './components/Room';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<JoinRoomForm />} />
      <Route path="/room/:roomid" element={<Room />} />
      <Route path="/room/join/:roomid" element={<JoinOther />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;