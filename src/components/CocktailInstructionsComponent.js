import React from 'react';

export default function CocktailInstructionsComponent(props) {

    return (
        <div className='row' style={{margin: '10px'}}> 
            <div className='col card' style={{padding: '10px'}}>
                <h1>{props.result.strDrink} Instructions</h1>
                <img className='img-fluid' src={props.result.strDrinkThumb} alt={props.result.strDrink}/>
            </div>
            <div className='col card d-flex' style={{marginLeft: '5px', padding: '10px'}}>
                <div className='text-start'>
                    <h2>Ingredients</h2>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>{props.result.strIngredient1}</li>
                        <li className='list-group-item'>{props.result.strIngredient2}</li>
                        <li className='list-group-item'>{props.result.strIngredient3}</li>
                        <li className='list-group-item'>{props.result.strIngredient4}</li>
                    </ul>
                    
                </div>
                <div className='text-start' style={{marginTop: '10px'}}>
                    <h2>Instructions</h2>
                    <p>{props.result.strInstructions}</p>
                </div>
            </div>
        </div>
    ) 
}
