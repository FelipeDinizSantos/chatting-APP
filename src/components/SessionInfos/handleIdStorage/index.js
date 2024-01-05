export default function handleIdStorage(name, value)
{
    if(localStorage.getItem(name) === null) localStorage.setItem(name, JSON.stringify(value));
}