import React, { Component }  from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import CocktailList from '../components/CocktailList/CocktailList';
import Heading from '../components/Heading/Heading';
import AddFavourite from '../components/Favourites/AddFavourite';
import RemoveFavourite from '../components/Favourites/RemoveFavourite';

export default class Home extends Component { 

    state = {
        cocktailResultsObject: [],
        favourites: [],
    }

    componentDidMount() {
        const cocktailFavourites = JSON.parse(
            localStorage.getItem('react-cocktail-app-favourites')
        );
        if (cocktailFavourites) {
            this.setState({favourites: cocktailFavourites})
		}
    }

    getCocktails = async (e) => { 
        const nameOfCocktail = e.target.elements.nameOfCocktail.value;
        e.preventDefault();
        const apiCall = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameOfCocktail}`);      
        const result = await apiCall.json();
        this.setState({cocktailResultsObject: result.drinks})
    }

    saveToLocalStorage = (items) => {
        localStorage.setItem('react-cocktail-app-favourites', JSON.stringify(items))
    }

    addFavouriteCocktail = (cocktail) => { 
        const newFavouriteCocktails = [...this.state.favourites, cocktail]
        this.setState({favourites: newFavouriteCocktails});
        this.saveToLocalStorage(newFavouriteCocktails);
    }

    removeFavouriteCocktail = (cocktail) => { 
        const newFavouriteCocktails = this.state.favourites.filter( 
            (favourite) => favourite.idDrink !== cocktail.idDrink
        );
        this.setState({favourites: newFavouriteCocktails});
        this.saveToLocalStorage(newFavouriteCocktails);
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
                        handleFavouritesClick={this.removeFavouriteCocktail} 
                        favouriteComponent={RemoveFavourite}
                        />
                    </div>
            </div>
        </div>
        )
    }
}