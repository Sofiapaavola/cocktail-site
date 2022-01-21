import React from 'react';
import ReactDOM from 'react-dom';
import CocktailCard from './CocktailCard';

it("renders without crashing", () => { 
    const div = document.createElement("div"); 
    ReactDOM.render(<CocktailCard></CocktailCard>, div)
})