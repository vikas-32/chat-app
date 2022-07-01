import React, { useEffect, useState } from "react";
import './Chat.css';
import QueryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../infobar/InfoBar";
import Input from "../input/Input";
import Messages from "../messages/Messages";
import TextContainer from '../textContainer/TextContainer';

let socket;
const Chat =({ location })=>{
    const [name, setname] = useState('');
    const [room, setroom] = useState('');
    const [users, setUsers] = useState('');
    const [messages, setmessages] = useState([]);
    const [message, setmessage] = useState('');
    const endpoint =  'https://chat-app-react-node.herokuapp.com/';

    useEffect(()=>{
        const {name, room} = QueryString.parse(location.search);
        socket = io(endpoint);
        setname(name);
        setroom(room);
        socket.emit('join', {name, room}, (error) => {
            if(error) {
              alert(error);
            }
          });

    }, [endpoint, location.search]);

    useEffect(() => {
        socket.on('message', message => {
          setmessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
    }, []);
    
      const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
          socket.emit('sendMessage', message, () => setmessage(''));
        }
      }
    
      return (
        <div className="outerContainer">
          <div className="container">
              <InfoBar room={room} />
              <Messages messages={messages} name={name} />
              <Input message={message} setmessage={setmessage} sendMessage={sendMessage} />
          </div>
          <TextContainer users={users}/>
        </div>
      );
    }
    
    export default Chat;