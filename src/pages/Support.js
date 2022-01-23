import React, { useState, useEffect } from 'react';

export default function Support() {

    const [status, setStatus] = useState('');

    function statusStyle(value){
      if (value  === "Up and running") return (<p style={{color: 'green'}}> {value} </p>) 
      else return <p style={{color: 'red'}}> {value} </p>;
  }

    const fetchData = async () => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        if (response.ok) { 
           setStatus("Up and running") 
        }
        if (response.status === 400) {
            setStatus("Status code 400: the server is unable to process the request");
        }   
        if (response.status === 503) {
          setStatus("Status code 503: the server cannot handle the request - either down for maintenance or overlaoded");
      }          
    }

    useEffect(() => {
    fetchData();
    }, []);

  return (
    <div className='text-start' style={{margin: '0 auto'}}> 
        <p>CocktailDB: {statusStyle(status)} </p>
    </div>
  )  
}