import React from 'react';

export default function CocktailInstructionsComponent(props) {

    return (
        <div className='row' style={{margin: '10px'}}> 
            <div className='col card'>
                <h1>{props.result.strDrink} Instructions</h1>
                <img className='img-fluid' src={props.result.strDrinkThumb} alt={props.result.strDrink}/>
            </div>
            <div className='col card' style={{marginLeft: '5px'}}>
            <h2>Ingredients</h2>
                <p>{props.result.strIngredient1}</p>
                <p>{props.result.strIngredient2}</p>
                <p>{props.result.strIngredient3}</p>
                <p>{props.result.strIngredient4}</p>
            <h2>Instructions</h2>
                <p>{props.result.strInstructions}</p>
            </div>
        </div>
    ) 
}
