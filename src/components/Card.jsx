import React, {useEffect, useState} from 'react'

const Card = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(response => setData(response));
        console.log(data);
    },[])  

    return (
        <div>Card</div>
    )
}

export default Card