import React from 'react';
import { Link } from "react-router-dom";

export default function CocktailList(props) {
    const FavouriteComponent = props.favouriteComponent;

    return (
        <div className='row' style={{overflowX:'auto', flexWrap: 'nowrap'}}>
            {props.results.map((cocktail) => {
                return (
                <div className='col-4 card' style={{backgroundColor: '#D76735', width: '300px', padding: '10px', margin: '10px'}} key={cocktail.idDrink}>
                    <img  className='card-img-top' src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                    <div className='card-body'>
                        <p className='card-text'> {cocktail.strDrink}</p>
                        <button className='btn-sm' style={buttonStyle}>
                            <Link to={ `/instructions/${cocktail.idDrink}`} style={buttonStyle}>View Instructions</Link>
                        </button>
                        <button className='btn-sm' style={heartButtonStyle} onClick={ () => props.handleFavouritesClick(cocktail)}>
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
    color: '#643754',
    fontSize: '100%',
    border: '0', 
    padding: '0', 
    backgroundColor: '#D76735'
}

const buttonStyle = { 
    backgroundColor: '#EFD78D',
    margin: '5px',
    border: '#D76735',
    color: 'black',
    textDecoration: 'none'
}