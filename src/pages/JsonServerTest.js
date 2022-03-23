import React, { useEffect, useState } from 'react'

export default function JsonServerTest() {

    const [users, setUsers] = useState(null); 
    const [isPending, setPending] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => { 
        fetch('http://localhost:7777/users')
        .then(res => { 
            if (!res.ok) {
                throw Error('could not fetch the data')
            }
            return res.json()
        })
        .then(data => {
            setPending(false);
            setUsers(data);
            setError(null);
        })
        .catch(err => {
            setPending(false); 
            setError(err.message);
        });
    }, []); 

    return (
        <div className='container text-start'>
             <div className="jumbotron">
                <h1>JSON Server Test</h1>
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                {users &&  
                <div> 
                    {users.map(user => (
                        <div key={ user.id }>
                            <h1>Employee {user.id} </h1>
                            <p>Name: { user.name }</p>
                            <p>Surname: { user.surname }</p>
                        </div>
                    ))}
                </div> 
                }         
            </div>
        </div>             
    )
}
