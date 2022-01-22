import React, { Component }  from 'react';
import SearchBar from '../components/SearchBar';
import CocktailCard from '../components/CocktailCard/CocktailCard';

export default class Home extends Component { 

    state = {
        cocktailResultsObject: [],
        defaultCocktails: []
    }

    getCocktails = async (e) => { 
        const cocktailResultsObject = this.state;
        const nameOfCocktail = e.target.elements.nameOfCocktail.value;
        e.preventDefault();
        const apiCall = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameOfCocktail}`);      
        const result = await apiCall.json();

        // todo: add some .then .. account for errors 
        this.setState({cocktailResultsObject: result.drinks})
    }

    render() {
        return (
        <div>
            <SearchBar getCocktails={this.getCocktails} placeholder="search for a cocktail..."/>
            <div className='container'>                
                <CocktailCard results={this.state.cocktailResultsObject}/>
            </div>
        </div>
        )
    }
}