import React from 'react'

export default function SearchBar(props) {
    return (
    <form onSubmit={props.getCocktails}> 
        <input type='text'
        name="nameOfCocktail"
        placeholder={props.placeholder}/>
        <button style={buttonStyle} size='sm'>search</button>
    </form>
    )
}

const buttonStyle = { 
    backgroundColor: 'pink',
    marginLeft: '2px',
    border: 'pink'
}
