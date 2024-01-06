import { useEffect } from "react";

export default function Messages(props)
{
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
            props.setMessageHistory(prevHistory => 
            [
                ...prevHistory,
                { from: data.from, isMyMessage: false, message: data.message }
            ]);
          }
        }
    }, [props.lastMessage]);

    return(
        <>
            <h3 className="messageTitle">MENSAGENS: </h3>
            <ul className="messagesContainer">
            {
                props.messageHistory.length === 0 ? ( <li className="noMessage">Nenhuma mensagem recebida ou enviada!</li> ) : 
                (
                    props.messageHistory.map((message, index) => 
                    (
                      message.isMyMessage === true ?    
                      <li key={index} className="myMessage">
                        Para Usuário {message.from}: {message.message}
                      </li>
                      :
                      <li key={index}>
                        De Usuário {message.from}: {message.message}
                      </li>
                    ))
                )
            }
            </ul>
        </>
    )
}