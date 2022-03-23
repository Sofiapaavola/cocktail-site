import React, { Component, useState, useEffect}  from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import CocktailList from '../components/CocktailList/CocktailList';
import Heading from '../components/Heading/Heading';
import AddFavourite from '../components/Favourites/AddFavourite';
import RemoveFavourite from '../components/Favourites/RemoveFavourite';

export default function Home() { 

    const [cocktailResultsObject, setObject] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [cache, setCache] = useState([]);
    const [cacheTimer, setCacheTimer] = useState(0);
    const [cacheTime, setCacheTime] = useState(1000);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
    const cocktailFavourites = JSON.parse(
        localStorage.getItem('react-cocktail-app-favourites')
    );
    if (cocktailFavourites) {
        setFavourites(cocktailFavourites)
    }
    }, []);

    
    const getCacheTimer = time => {
        const now = new Date().getTime();
        if (cacheTimer < now + time) {
            cacheTimer = now + time
        }
        return cacheTimer;
    }

    const fetchWithCache = async (e, time) => { 
        const cocktailName = e.target.elements.nameOfCocktail.value;
        const now = new Date().getTime();
        if (!cache[cocktailName] || cache[cocktailName].cacheTimer < now) { 
            setCache(await getCocktails(cocktailName))
            setCacheTimer(getCacheTimer(time))
            //cache[cocktailName].cacheTimer = getCacheTimer(time)
        }
        console.log('cache', cache)
        return cache
    }

    const getCocktails = async (e) => { 
        const cocktailName = e.target.elements.nameOfCocktail.value;
        e.preventDefault();
        setLoading(true);
        const apiCall = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`);      
        const result = await apiCall.json();
        setObject(result.drinks);
        setLoading(false);
    }

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-cocktail-app-favourites', JSON.stringify(items))
    }

    const addFavouriteCocktail = (cocktail) => { 
        const newFavouriteCocktails = [...favourites, cocktail]
        setFavourites(newFavouriteCocktails)
        saveToLocalStorage(newFavouriteCocktails);
    }

    const removeFavouriteCocktail = (cocktail) => { 
        const newFavouriteCocktails = favourites.filter( 
            (favourite) => favourite.idDrink !== cocktail.idDrink
        );
        setFavourites(newFavouriteCocktails)
        saveToLocalStorage(newFavouriteCocktails);
    }

    const renderFavourites = () => { 
        if (favourites !== null && favourites.length > 0) { 
            return ( 
            <>
                <Heading title="Faves"></Heading>  
                <div className='row'>
                    <CocktailList 
                    results={favourites}
                    handleFavouritesClick={removeFavouriteCocktail} 
                    favouriteComponent={RemoveFavourite}
                    />
                </div>
            </>
            )
        } else return <></>           
    }

    return (
    <div>
        <SearchBar getCocktails={getCocktails} placeholder="search for a cocktail..."/>
        {isLoading && <div> Loading...</div>} 
        <div style={{padding: '10px'}}>     
            <div className='row'>
                <CocktailList 
                handleFavouritesClick={addFavouriteCocktail} 
                favouriteComponent={AddFavourite}
                results={cocktailResultsObject}/>
            </div>
            {renderFavourites()}
        </div>
    </div>
    )

}