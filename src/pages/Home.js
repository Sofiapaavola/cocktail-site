import React, { Component }  from 'react';
import SearchBar from '../components/SearchBar';
import CocktailList from '../components/CocktailList/CocktailList';

export default class Home extends Component { 

    state = {
        cocktailResultsObject: [],
        favourites: []
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

    addFavouriteCocktail = (cocktail) => { 
        const newFavouriteCocktail = [...this.state.favourites, cocktail]
        this.setState({favourites: newFavouriteCocktail})
    }

    render() {
        return (
        <div>
            <SearchBar getCocktails={this.getCocktails} placeholder="search for a cocktail..."/>
            <div className='wide container'>     
            <h2 className='text-start'>Cocktails</h2>           
                <CocktailList handleFavouritesClick={this.addFavouriteCocktail} results={this.state.cocktailResultsObject}/>
            <h2 className='text-start'>Faves</h2>   
                <CocktailList results={this.state.favourites}/>
            </div>
        </div>
        )
    }
}