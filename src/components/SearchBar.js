import React from 'react';

export default function SearchBar(props) {
    return (
    <form style={{padding: '10px'}} onSubmit={props.getCocktails}> 
        <div className='form-group'>
            <input type='text'
            className='sm form-control'
            name='nameOfCocktail'
            placeholder={props.placeholder}/>
            <button className='btn' style={buttonStyle} size='sm'>search</button>
        </div>
    </form>
    )
}

const buttonStyle = { 
    backgroundColor: 'pink',
    margin: '5px',
    border: 'pink',
    color: 'white'
}