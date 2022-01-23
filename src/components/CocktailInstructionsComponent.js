import React from 'react';

export default function CocktailInstructionsComponent(props) {
    
    function isEmpty(value){
        if (value !== null) {
        return (
            <li className='list-group-item'>{value}</li> 
        ) }
        else return( <div></div>);
    }

      // need to add a function that can cover the ingredients and checks whether it is null or not

    return (
        <div className='row' style={{margin: '10px'}}> 
            <div className='col card' style={{backgroundColor: '#f2d8b3', borderColor: '#D76735', padding: '10px'}}>
                <h1>{props.result.strDrink} Instructions</h1>
                <img className='img-fluid' src={props.result.strDrinkThumb} alt={props.result.strDrink}/>
            </div>
            <div className='col card d-flex' style={{backgroundColor: '#f2d8b3', borderColor: '#D76735',  marginLeft: '5px', padding: '10px'}}>
                <div className='text-start'>
                    <h2>Ingredients</h2>
                    <ul className='list-group list-group-flush'>
                        {isEmpty(props.result.strIngredient1)}
                        {isEmpty(props.result.strIngredient2) }
                        {isEmpty(props.result.strIngredient3) } 
                        {isEmpty(props.result.strIngredient4) }
                        {isEmpty(props.result.strIngredient5) }
                        {isEmpty(props.result.strIngredient6) }
                        {isEmpty(props.result.strIngredient7) }
                        {isEmpty(props.result.strIngredient8) }

                        {/* <li className='list-group-item'>{props.result.strIngredient2}</li>
                        <li className='list-group-item'>{props.result.strIngredient3}</li>
                        <li className='list-group-item'>{props.result.strIngredient4}</li>
                        <li className='list-group-item'>{props.result.strIngredient5}</li>
                        <li className='list-group-item'>{props.result.strIngredient6}</li>
                        <li className='list-group-item'>{props.result.strIngredient7}</li>
                        <li className='list-group-item'>{props.result.strIngredient8}</li> */}
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
