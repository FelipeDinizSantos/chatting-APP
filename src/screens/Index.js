import { useState } from 'react';

import '../assets/styles/index.css';
import Form from '../components/Form';
import useWebSocket from "react-use-websocket";
import SessionInfos from '../components/SessionInfos';
import Messages from '../components/Messages';
import Globals from "../config/Globals";

export default function Index()
{
    const [myId, setMyId] = useState(0);
    const [connectedUsers, setConnectedUsers] = useState(0);
    const socketUrl = Globals.WS_URL 

    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

    if(readyState === 1) console.log('Conectado ao servidor!');
    if(readyState === 0) console.log('Desconectado!');

    return(
        <>
            <SessionInfos 
                myId={myId} setMyId={setMyId} 
                connectedUsers={connectedUsers} setConnectedUsers={setConnectedUsers}
                lastMessage={lastMessage}
            />

            <Form send={sendMessage} myId={myId} />

            <Messages myId={myId} lastMessage={lastMessage}/>
        </>
    )
}