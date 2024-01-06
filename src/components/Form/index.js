import { useState } from "react";

export default function Form(props)
{
    const [to, setTo] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event)=>
    {
        event.preventDefault();

        if(to === props.myId)
        {
            alert('Não é possivel enviar uma mensagem para si mesmo!');
            return;
        }

        if(message === '' || to === '')
        {
            alert('Preencha todos os campos!');
            return;
        }
       
        props.send(JSON.stringify(
        {
            from: props.myId,
            to: to,
            message: message
        }))

        props.setMessageHistory(prevHistory => 
        [
            ...prevHistory,
            { from: to, isMyMessage: true, message: message }
        ]);

        setMessage('');
    }

    return(
        <form className="form" onSubmit={handleSubmit}>

            <label>ID do Destinatario: </label> 
            <input className="to" type="number" min="1" value={to} onChange={(e)=>setTo(e.target.value)} placeholder="ID" />
            <label>Mensagem: </label>
            <textarea className="message" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Mensagem" ></textarea>  

            <button className="submit">Enviar</button>
        </form>
    )
}