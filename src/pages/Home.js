import React, { Component }  from 'react'
import SearchBar from '../components/SearchBar'

class Home extends Component { 
    
    getCocktails = async (e) => { 
        const nameOfCocktail = e.target.elements.nameOfCocktail.value;
        e.preventDefault();
        const apiCall = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameOfCocktail}`);      
        const result = await apiCall.json();
        console.log(result)  
  }

    render() {
        return (
        <div>
            <SearchBar getCocktails={this.getCocktails} placeholder="search for a cocktail..."/>
        </div>
        )
    }
}

export default Home;