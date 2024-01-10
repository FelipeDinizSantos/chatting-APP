import { useRef } from 'react';
 
import './css/index.css';

export default function MessageForm(props)
{
    const textArea = useRef();

    const handleSubmit = (event)=>
    {
        event.preventDefault();

        if(props.to === props.myId)
        {
            alert('Não é possivel enviar uma mensagem para si mesmo!');
            return;
        }

        if(props.message === '' || props.to === '')
        {
            alert('Preencha todos os campos necessarios!');
            return;
        }
       
        props.send(JSON.stringify(
        {
            from: props.myId,
            to: props.to,
            time: getCurrentTime(),
            message: props.message
        }))

        props.setMessageHistory(prevHistory => 
        [
            ...prevHistory,
            { from: props.to, isMyMessage: true, time: getCurrentTime(), message: props.message }
        ]);

        textArea.current.rows = 0;
        textArea.current.style.height= 3.2 + 'em';
        props.setMessage('');
    }

    const getCurrentTime= ()=>
    {
        const CURRENTDATE = new Date();
        const MINUTES = CURRENTDATE.getMinutes();
        const HOUR = CURRENTDATE.getHours();

        if(MINUTES > 1 && MINUTES < 10) return(HOUR + ':0' + MINUTES);
        if(MINUTES === 0) return(HOUR + ':00');
        return(HOUR + ':' + MINUTES);
    }

    const handleTextResize = (element) => {
        if(element.value){
            if(element.scrollHeight > element.offsetHeight){
                element.style.resize='vertical';
                element.style.height='auto';
                element.rows += 1;
                element.style.resize='none';
            }
        } else{
            element.rows = 0;
            element.style.height=3.2 + 'em';
        }
    };

    return(
        <form className="submitFormMessage" onSubmit={handleSubmit}>
            <textarea value={props.message} onChange={(e)=>props.setMessage(e.target.value)} onInput={(e)=>handleTextResize(e.target)} placeholder="Digite uma Mensagem" ref={textArea} ></textarea>  
            <button type='submit'>{'>'}</button>
        </form>
    )
}