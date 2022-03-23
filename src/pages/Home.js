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
        cache: [],
        cacheTimer: 0,
        cacheTime: 10000, 
        isLoading: false
    } 

    componentDidMount() {
        const cocktailFavourites = JSON.parse(
            localStorage.getItem('react-cocktail-app-favourites')
        );
        if (cocktailFavourites) {
            this.setState({favourites: cocktailFavourites})
		}
    }

    getCacheTimer = time => {
        const now = new Date().getTime();
        if (this.state.cacheTimer < now + time) {
            this.state.cacheTimer = now + time
        }
        return this.state.cacheTimer;
    }

    fetchWithCache = async (e, time) => { 
        const cocktailName = e.target.elements.nameOfCocktail.value;
        const now = new Date().getTime();
        if (!this.state.cache[cocktailName] || this.state.cache[cocktailName].cacheTimer < now) { 
            this.setState({cache: await this.getCocktails(cocktailName)})
            this.setState({cacheTimer: this.getCacheTimer(time)})
            //this.state.cache[cocktailName].cacheTimer = this.getCacheTimer(time)
        }
        console.log('cache', this.state.cache)
        return this.state.cache
    }

    getCocktails = async (e) => { 
        const cocktailName = e.target.elements.nameOfCocktail.value;
        e.preventDefault();
        this.setState({isLoading: true})
        const apiCall = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`);      
        const result = await apiCall.json();
        this.setState({cocktailResultsObject: result.drinks, isLoading: false})
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

    renderFavourites() { 
        if (this.state.favourites !== null && this.state.favourites.length > 0) { 
            return ( 
            <>
                <Heading title="Faves"></Heading>  
                <div className='row'>
                    <CocktailList 
                    results={this.state.favourites}
                    handleFavouritesClick={this.removeFavouriteCocktail} 
                    favouriteComponent={RemoveFavourite}
                    />
                </div>
            </>
            )
        } else return <></>           
    }

    render() {
        return (
        <div>
            <SearchBar getCocktails={this.getCocktails} placeholder="search for a cocktail..."/>
            {this.state.isLoading && <div> Loading...</div>} 
            <div style={{padding: '10px'}}>     
                <div className='row'>
                    <CocktailList 
                    handleFavouritesClick={this.addFavouriteCocktail} 
                    favouriteComponent={AddFavourite}
                    results={this.state.cocktailResultsObject}/>
                </div>
                {this.renderFavourites()}
            </div>
        </div>
        )
    }
}