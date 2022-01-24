import React from 'react';
import { Link } from "react-router-dom";

export default function CocktailList({
    results, 
    handleFavouritesClick,
    favouriteComponent
}) {
    const FavouriteComponent = favouriteComponent;

    return (
        <div className='row' style={{overflowX:'auto', flexWrap: 'nowrap'}}>
            {results.map((cocktail) => {
                return (
                <div className='card hover-styles' style={{backgroundColor: '#D76735', width: '500px', padding: '10px', margin: '10px'}} key={cocktail.idDrink}>
                    <img  className='card-img' src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                    <div className='card-img-overlay text-white d-flex flex-column justify-content-center'>
                        <h1 className='card-title'> {cocktail.strDrink}</h1>
                        <button className='btn' style={buttonStyle}>
                            <Link data-testid="instructionsButton" to={ `/instructions/${cocktail.idDrink}`} style={buttonStyle}>View Instructions</Link>
                        </button> 
                        <button className='btn' style={heartButtonStyle} onClick={() => handleFavouritesClick(cocktail)}>
                            <FavouriteComponent /> 
                        </button>
                    </div>
                </div> 
                ) 
            })}
        </div> 
    ) 
}

const heartButtonStyle = {
    color: 'white',
    fontSize: '30px',
    border: '0', 
    padding: '0', 
}

const buttonStyle = { 
    border: '#D76735',
    color: 'white',
    textDecoration: 'none'
}