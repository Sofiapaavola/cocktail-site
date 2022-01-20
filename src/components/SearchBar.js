import React from 'react'

export default function SearchBar(props) {
    return (
    <div>
        <input type="text" 
        placeholder={props.placeholder}/>
        <button>search</button>
    </div>
    )
}
