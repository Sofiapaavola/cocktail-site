import React from 'react';

export default function SearchBar(props) {
    return (
    <form classNa='form-inline' style={{padding: '10px'}} onSubmit={props.getCocktails}> 
        <div className='input-group ' style={{width: '500px'}}>
            <input type='text'
            className='form-control mr-sm-2"'
            name='nameOfCocktail'
            placeholder={props.placeholder}/>
            <button className='btn my-2 my-sm-0' style={buttonStyle} size='sm'>search</button>

        </div>
    </form>
    )
}

const buttonStyle = { 
    backgroundColor: '#D76735',
    margin: '5px',
    border: '#D76735',
}