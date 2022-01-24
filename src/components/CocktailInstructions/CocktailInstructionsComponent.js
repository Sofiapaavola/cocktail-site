import React from 'react';

export default function CocktailInstructionsComponent({
    result
}) {
    
    function isEmpty(value){
        if (value !== null) {
        return (
            <li className='list-group-item'>{value}</li> 
        ) }
        else return(<div></div>);
    }

    return (
        <div className='row' style={{margin: '10px'}}> 
            <div className='col card' style={{backgroundColor: '#f2d8b3', borderColor: '#D76735', padding: '10px'}}>
                <h1 data-testid="mainInstructions">{result.strDrink} Instructions</h1>
                <img className='img-fluid' src={result.strDrinkThumb} alt={result.strDrink}/>
            </div>
            <div className='col card d-flex' style={{backgroundColor: '#f2d8b3', borderColor: '#D76735',  marginLeft: '5px', padding: '10px'}}>
                <div className='text-start'>
                    <h2 data-testid="ingredientsTitle">Ingredients</h2>
                    <ul className='list-group list-group-flush'>
                        {isEmpty(result.strIngredient1)}
                        {isEmpty(result.strIngredient2)}
                        {isEmpty(result.strIngredient3)} 
                        {isEmpty(result.strIngredient4)}
                        {isEmpty(result.strIngredient5)}
                        {isEmpty(result.strIngredient6)}
                        {isEmpty(result.strIngredient7)}
                        {isEmpty(result.strIngredient8)}
                    </ul>   
                </div>
                <div className='text-start' style={{marginTop: '10px'}}>
                    <h2 data-testid="instructionsCardTitle">Instructions</h2>
                    <p style={{backgroundColor: 'white'}}>{result.strInstructions}</p>
                </div>
            </div>
        </div>
    ) 
}
