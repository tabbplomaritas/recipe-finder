"use strict";

function RecipeRequest($http, $location) {
  let finalData = {};
  let favorites = [];
  let clickedThumbnail = {};

  const getRecipeRequest = (query, prepTime, calories) => {

    if(prepTime === undefined){
      prepTime = "";
    }

    if(calories === undefined){
      calories = "";
    }

    return $http({
      method: 'GET',
      url: `https://api.edamam.com/search?q=${query}&app_id=374a64e6&app_key=${key()}${prepTime}${calories}`,
      // &from=0
      // &to=10
      // &calories=591-722
      // &health=alcohol-free
    }).then((response) => {
      finalData = response;
      
  
      
      return finalData;
    }, (error) => {
      console.log(error);
    });
  };
  
  const returnResults = () => {
    return finalData;
  };
  
  const addFavorite = (favorite) => {
    favorites.push(favorite);
    console.log(favorites);
    return favorites;
  }

  const removeFavorite = (index) => {
    favorites.splice(index, 1);
    return favorites;
  }

  const getFavorites = () => {
    return favorites;
  }

  const sendDetails = (item) => {
    clickedThumbnail = item;
    $location.path("/recipe-details")
   return clickedThumbnail;
  }

  const viewDetails = () =>{
    return clickedThumbnail;
  }

  return {
    getRecipeRequest,
    returnResults,
    addFavorite,
    removeFavorite,
    getFavorites, 
    sendDetails, 
    viewDetails
  };
  
}



angular
  .module("App")
  .factory("RecipeRequest", RecipeRequest);