import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function Instructions(props) {

    const [activeRecipe, setActiveRecipe] = useState([])
    const params = useParams();

    const fetchData = async () => {
        const id = params.id;
        const apiCall = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        const result = await apiCall.json()
        setActiveRecipe(result.drinks[0])    
        console.log(activeRecipe)
    }

    useEffect(() => {
    fetchData();
    }, []);

  return (
      <div className='row' style={{margin: '10px'}}> 
          <div className='col card'>
            <h1>{activeRecipe.strDrink} Instructions</h1>
            <img className='img-fluid' src={activeRecipe.strDrinkThumb} alt={activeRecipe.strDrink}/>
          </div>
          <div className='col card' style={{marginLeft: '5px'}}>
              <h2>Ingredients</h2>
                <p>{activeRecipe.strIngredient1}</p>
                <p>{activeRecipe.strIngredient2}</p>
                <p>{activeRecipe.strIngredient3}</p>
                <p>{activeRecipe.strIngredient4}</p>
              <h2>Instructions</h2>
                 <p>{activeRecipe.strInstructions}</p>
          </div>
      </div>
  )  
}