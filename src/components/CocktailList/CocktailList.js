import React from 'react';
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export default function CocktailList(props) {
    return (
        <div className='row'>
            {props.results.map((cocktail) => {
                return (
                <div className='col-4 card' style={{backgroundColor: '#EFD78D', width: '200px', padding: '10px', margin: '10px'}} key={cocktail.idDrink}>
                    <img  className='card-img-top' src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                    <div className='card-body'>
                        <p className='card-text'> {cocktail.strDrink}</p>
                        <button className='btn-sm' style={buttonStyle}>
                            <Link to={ `/instructions/${cocktail.idDrink}`} style={buttonStyle}>View Instructions</Link>
                        </button>
                        <button className='btn-sm' style={heartButtonStyle} onClick={ () => props.handleFavouritesClick(cocktail)}><FaHeart/></button>
                    </div>
                </div> 
                ) 
            })}
        </div> 
    ) 
}

const heartButtonStyle = {
    color: '#643754',
    fontSize: '100%',
    border: '0', 
    padding: '0', 
    backgroundColor: '#EFD78D'
}

const buttonStyle = { 
    backgroundColor: '#D76735',
    margin: '5px',
    border: '#D76735',
    color: 'black',
    textDecoration: 'none'
}