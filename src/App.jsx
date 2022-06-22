import React, {useState, useEffect } from 'react';
import User from './components/User';

export default function App() {

    // State
    const [users, setUsers] = useState([])


    // Effect
    useEffect(()=>{
        fetch("https://dummyjson.com/users")
        .then(response => response.json())
        .then(json => {
            console.log(json.users)
            setUsers(json.users)
        })
    }, []);

    return (
        <>
            <h1>OLA, REACT!</h1>
            {users.map(user => {
                return <User user={user} key={user.id}/>
            })}
        </>
    )
}