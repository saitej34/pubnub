import React from 'react';
import { PubNubProvider} from 'pubnub-react';
import { useParams } from 'react-router-dom';
import Chat from './Chat';
import pubnub from './pubnub.config'


const Room = () => {
  const { roomid } = useParams();

  return (
    <div>
    <PubNubProvider client={pubnub}>
    <center><h2>Room: {roomid} </h2></center>
      <Chat roomid={roomid}/>
    </PubNubProvider>
    </div>
  );
};

export default Room;

