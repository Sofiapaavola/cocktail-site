import React, { useEffect, useState } from 'react'

export default function JsonServerTest() {

    const [users, setUsers] = useState(null); 

    useEffect(() => { 
        fetch('http://localhost:7777/users')
        .then(res => { 
            return res.json()
        })
        .then(data => {
            console.log('results', data)
            setUsers(data)
        });
    }, []); 

    return (
        <div className='container text-start'>
             <div className="jumbotron">
                <h1>JSON Server Test</h1>
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
