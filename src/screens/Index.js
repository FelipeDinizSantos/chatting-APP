import { useState, useEffect } from 'react';

import '../assets/styles/index.css';
import Form from '../components/Form';
import useWebSocket from "react-use-websocket";
import SessionInfos from '../components/SessionInfos';
import Messages from '../components/Messages';
import Globals from "../config/Globals";

export default function Index()
{
    const [myId, setMyId] = useState( localStorage.getItem('yourID') ? JSON.parse(localStorage.getItem('yourID')) : 0 );
    const [connectedUsers, setConnectedUsers] = useState(0);
    const [messageHistory, setMessageHistory] = useState(
        JSON.parse(localStorage.getItem('messageHistory')) ? JSON.parse(localStorage.getItem('messageHistory')) : []
    );

    const socketUrl = Globals.WS_URL 
    
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
        queryParams: {
            userID: myId,
        }
    });
    
    useEffect(()=>
    {
        localStorage.setItem('messageHistory', JSON.stringify(messageHistory));
    }, [messageHistory])

    if(readyState === 1) console.log('Conectado ao servidor!');
    if(readyState === 0) console.log('Desconectado!');

    return(
        <>
            <SessionInfos 
                myId={myId} setMyId={setMyId} 
                connectedUsers={connectedUsers} setConnectedUsers={setConnectedUsers}
                lastMessage={lastMessage}
            />

            <Form 
                send={sendMessage} 
                myId={myId} 
                setMessageHistory={setMessageHistory}
            />

            <Messages 
                myId={myId} 
                lastMessage={lastMessage}
                messageHistory={messageHistory}
                setMessageHistory={setMessageHistory}
            />
        </>
    )
}