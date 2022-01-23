import React, { Component }  from 'react';
import SearchBar from '../components/SearchBar';
import CocktailList from '../components/CocktailList/CocktailList';
import Heading from '../components/Heading'; 
import AddFavourite from '../components/AddFavourite';
import RemoveFavourite from '../components/RemoveFavourite';

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
            <div style={{padding: '10px'}}>     
                <Heading title="Cocktails"></Heading>  
                    <div className='row'>
                        <CocktailList 
                        handleFavouritesClick={this.addFavouriteCocktail} 
    					favouriteComponent={AddFavourite}
                        results={this.state.cocktailResultsObject}/>
                    </div>
                <Heading title="Faves"></Heading>  
                    <div className='row'>
                        <CocktailList 
                        results={this.state.favourites}
                        favouriteComponent={RemoveFavourite}
                        />
                    </div>
            </div>
        </div>
        )
    }
}