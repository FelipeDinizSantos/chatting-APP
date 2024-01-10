import { useState, useEffect } from 'react';

import '../assets/css/index.css';

import ToIdForm from '../components/ToIdForm';
import MessageForm from '../components/MessageForm';
import useWebSocket from "react-use-websocket";
import SessionInfos from '../components/SessionInfos';
import Messages from '../components/Messages';
import Globals from "../config/Globals";

export default function Index()
{
    const [myId, setMyId] = useState( localStorage.getItem('yourID') ? JSON.parse(localStorage.getItem('yourID')) : 0 );
    const [to, setTo] = useState('');
    const [message, setMessage] = useState('');
    const [connectedUsers, setConnectedUsers] = useState(0);
    const [messageHistory, setMessageHistory] = useState(
        localStorage.getItem('messageHistory') ? JSON.parse(localStorage.getItem('messageHistory')) : []
    );

    const socketUrl = Globals.WS_URL 
    
    const { sendMessage, lastMessage } = useWebSocket(socketUrl, {
        queryParams: {
            userID: myId,
        }
    });
    
    useEffect(()=>
    {
        localStorage.setItem('messageHistory', JSON.stringify(messageHistory));
    }, [messageHistory]);

    return(
        <div className='container'>
            <SessionInfos 
                myId={myId} setMyId={setMyId} 
                connectedUsers={connectedUsers} setConnectedUsers={setConnectedUsers}
                lastMessage={lastMessage}
            />

            <ToIdForm 
                to={to}
                setTo={setTo}
            />

            <Messages 
                myId={myId} 
                lastMessage={lastMessage}
                messageHistory={messageHistory}
                setMessageHistory={setMessageHistory}
            />

            <MessageForm
                send={sendMessage} 
                myId={myId} 
                setMessageHistory={setMessageHistory}
                to={to}
                message={message}
                setMessage={setMessage}
            />
        </div>
    )
}