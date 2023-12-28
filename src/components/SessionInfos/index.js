export default function SessionInfos(props)
{
    if(props.lastMessage)
    {
        const data = JSON.parse(props.lastMessage.data);
        if(data.action === 'informId')
        {
            props.setMyId(data.id);
            props.setConnectedUsers(data.connectedUsers);
        }
    }

    return(
        <>
            <h1 className="myId">Seu ID: {props.myId}</h1>
            <p className="connectedUsers">Usuários online: {props.connectedUsers}</p>
        </>
    )
}