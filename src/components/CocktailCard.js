import React from 'react';
import { Link } from "react-router-dom";

export default function CocktailCard(props) {
    return (
        <div className='row'>
            {props.results.map((cocktail) => {
                return (
                <div className='col-4 card' style={{width: '200px', padding: '10px', margin: '10px'}} key={cocktail.idDrink}>
                    <img  className='card-img-top' src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                    <div className='card-body'>
                        <p className='card-text'> {cocktail.strDrink}</p>
                        <button className='btn-sm' style={buttonStyle}>
                            <Link to={ `/instructions/${cocktail.idDrink}`} style={buttonStyle}>View Instructions</Link>
                        </button>
                    </div>

                </div> 
                ) 
            })}
        </div> 
    ) 
}

const buttonStyle = { 
    backgroundColor: 'pink',
    margin: '5px',
    border: 'pink',
    color: 'white',
    textDecoration: 'none'
}