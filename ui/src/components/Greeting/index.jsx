import {useState, useEffect} from 'react';

import { getGreetings } from '../../api';

export const Greeting = ()=>{
    const [message, setMessage] = useState("");

    useEffect(() => {

        getGreetings()
            .then(({data : message})=>{
                setMessage(message);
            })
            .catch((err)=>{
                setMessage("Error from server : "+err.message);
            })
    },[]);

    return (
        <h1>{message}</h1>
    )
}