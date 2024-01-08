import './css/index.css';

export default function ToIdForm(props)
{
    return(
        <div className='toIdContainer'>
            <p>Para quem deseja enviar uma mensagem?</p>
            <input className="to" type="number" min="1000" max="9999" value={props.to} onChange={(e)=>props.setTo(e.target.value)} placeholder="ex: 9876" />          
        </div>
    )
}