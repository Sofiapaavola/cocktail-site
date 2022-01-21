import React, { useState, useEffect } from 'react';

export default function Support() {

    const [status, setStatus] = useState('')

    const fetchData = async () => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        if (response.ok) { 
           setStatus("Up and running") 
        }
        if (response.status === 400) {
            setStatus("Status code 400");
        }    
          
    }

    useEffect(() => {
    fetchData();
    }, []);

  return (
    <div className='text-start' style={{margin: '0 auto'}}> 
        <p>CocktailDB: {status}</p>
    </div>
  )  
}