import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CocktailInstructionsComponent from '../components/CocktailInstructions/CocktailInstructionsComponent';

export default function Instructions(props) {

    const [instruction, setInstruction] = useState([])
    const params = useParams();

    const fetchData = async () => {
        const id = params.id;
        const apiCall = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        const result = await apiCall.json()
        setInstruction(result.drinks[0])    
    }

    useEffect(() => {
    fetchData();
    }, []);

  return (
    <div style={{margin: '0 auto'}}> 
        <CocktailInstructionsComponent result={instruction}/>
    </div>
  )  
}