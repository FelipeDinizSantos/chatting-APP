import { useEffect, useRef } from "react";
import './css/index.css';

export default function Messages(props)
{
    const messagesContainer = useRef();

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

    useEffect(()=>
    { 
      if(messagesContainer.current)
      {
        messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight;
      }
    }, [props.messageHistory])

    return(
        <>
            <ul className="messages" ref={messagesContainer}>
            {
                props.messageHistory.length === 0 ? ( <li className="noMessage">Nenhuma mensagem enviada ou recebida!</li> ) : 
                (
                    props.messageHistory.map((message, index) => 
                    (
                      message.isMyMessage === true ?    
                      <li key={index} className="message my">
                        <div>
                          <span>Para {message.from}</span>
                          <span>{message.message}</span>
                        </div>
                      </li>
                      :
                      <li key={index} className="message">
                        <div>
                          <span>De {message.from}</span> 
                          <span>{message.message}</span>
                        </div>
                      </li>
                    ))
                )
            }
            </ul>
        </>
    )
}