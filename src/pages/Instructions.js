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
      <div> 
          <header>
              <h1>{activeRecipe.strDrink} Instructions</h1>
          </header>
          <div>
            <img src={activeRecipe.strDrinkThumb} alt={activeRecipe.strDrink}/>
          </div>
          <div>
              <p>{activeRecipe.strInstructions}</p>
          </div>
      </div>
  )  
}