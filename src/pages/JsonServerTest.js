import React, { useEffect, useState } from 'react';
import useFetch from '../customHooks/useFetch';

export default function JsonServerTest() {

    const { data: users, isPending, error } = useFetch('http://localhost:7777/users'); 

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
