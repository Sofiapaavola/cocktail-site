import { render, screen } from '@testing-library/react';
import CocktailInstructionsComponent from './CocktailInstructionsComponent';
import '@testing-library/jest-dom/extend-expect';

const cocktail = { "idDrink":"17216","strDrink":"Tommy's Margarita","strDrinkAlternate":null,"strTags":"IBA,NewEra","strVideo":null,"strCategory":"Ordinary Drink","strIBA":"New Era Drinks","strAlcoholic":"Alcoholic","strGlass":"Old-Fashioned glass","strInstructions":"Shake and strain into a chilled cocktail glass.","strInstructionsES":null,"strInstructionsDE":"Sch\u00fctteln und in ein gek\u00fchltes Cocktailglas abseihen.","strInstructionsFR":null,"strInstructionsIT":"Shakerare e filtrare in una coppetta da cocktail ghiacciata.","strInstructionsZH-HANS":null,"strInstructionsZH-HANT":null,"strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/loezxn1504373874.jpg","strIngredient1":"Tequila","strIngredient2":"Lime Juice","strIngredient3":"Agave syrup","strIngredient4":null,"strIngredient5":null,"strIngredient6":null,"strIngredient7":null,"strIngredient8":null,"strIngredient9":null,"strIngredient10":null,"strIngredient11":null,"strIngredient12":null,"strIngredient13":null,"strIngredient14":null,"strIngredient15":null,"strMeasure1":"4.5 cl","strMeasure2":"1.5 cl","strMeasure3":"2 spoons","strMeasure4":null,"strMeasure5":null,"strMeasure6":null,"strMeasure7":null,"strMeasure8":null,"strMeasure9":null,"strMeasure10":null,"strMeasure11":null,"strMeasure12":null,"strMeasure13":null,"strMeasure14":null,"strMeasure15":null,"strImageSource":null,"strImageAttribution":null,"strCreativeCommonsConfirmed":"No","dateModified":"2017-09-02 18:37:54"}

test('renders correct titles for the instructions page', async () => {
  const {getByTestId} = render(<CocktailInstructionsComponent result={cocktail}/>);
  
  const title = getByTestId("mainInstructions"); 
  expect(title.textContent).toBe("Tommy's Margarita Instructions")
 
  const title1 = getByTestId("ingredientsTitle"); 
  expect(title1.textContent).toBe("Ingredients")

  const title2 = getByTestId("instructionsCardTitle"); 
  expect(title2.textContent).toBe("Instructions")
});
