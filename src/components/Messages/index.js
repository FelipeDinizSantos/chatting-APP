import { useState, useEffect } from "react";

export default function Messages(props)
{
    const [messageHistory, setMessageHistory] = useState([]);

    const vibratePhone = (timeMs) => 
    {
        if (navigator.vibrate) 
        {
          navigator.vibrate(timeMs);
        }
    }

    useEffect(() => 
    {
        if (props.lastMessage) 
        {
          const data = JSON.parse(props.lastMessage.data);
          if (data.action === 'message') 
          {
            vibratePhone(1000);
            setMessageHistory(prevHistory => 
            [
                ...prevHistory,
                { from: data.from, message: data.message }
            ]);
          }
        }
    }, [props.lastMessage]);

    return(
        <>
            <h3 className="messageTitle">MENSAGENS: </h3>
            <ul className="messagesContainer">
            {
                messageHistory.length === 0 ? ( <li className="noMessage">Nenhuma mensagem recebida!</li> ) : 
                (
                    messageHistory.map((message, index) => 
                    (
                      <li key={index}>
                        Usuário {message.from}: {message.message}
                      </li>
                    ))
                )
            }
            </ul>
        </>
    )
}