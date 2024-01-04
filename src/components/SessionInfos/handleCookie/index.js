export default function handleCookie(name, value)
{
    const getExpires = ()=>
    {
        const currentDate = new Date();
        const expirationDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
        const expires = `expires=${expirationDate.toUTCString()}`;

        return expires;
    }

    const isCookieExist = (name) =>
    {
        const cookies = document.cookie.split(';');
        
        if(cookies.length > 0)
        {
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.startsWith(`${name}=`)) {
                    return true;
                }
            }
        }
    
        return false;
    }

    if(!isCookieExist(name))
    {
        document.cookie = `${name}=${value}; ${getExpires()}; path=/`;
    }
} 