"use strict";

function RecipeRequest($http) {
  let finalData = {};
  let favorites = [];

  const getRecipeRequest = (query) => {
    
    return $http({
      method: 'GET',
      url: `https://api.edamam.com/search?q=${query}&app_id=374a64e6&app_key=64ab82f36acec37332c27c94e94d9308`,
      // &from=0
      // &to=10
      // &calories=591-722
      // &health=alcohol-free
    }).then((response) => {
      finalData = response;
      console.log(finalData);
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
    return favorites;
  }

  const removeFavorite = (index) => {
    favorites.splice(index, 1);
    return favorites;
  }

  const getFavorites = () => {
    return favorites;
  }



  return {
    getRecipeRequest,
    returnResults,
    addFavorite,
    removeFavorite,
    getFavorites
  };
  
}

angular
  .module("App")
  .factory("RecipeRequest", RecipeRequest);