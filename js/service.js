"use strict";

function RecipeRequest($http) {
  let finalData = {};

  const getRecipeRequest = (query) => {
    
    return $http({
      method: 'GET',
      url: `https://api.edamam.com/search?q=${query}&app_id=374a64e6&app_key=64ab82f36acec37332c27c94e94d9308`,
      // &from=0
      // &to=10
      // &calories=591-722
      // &health=alcohol-free
    }).then((response) => {
      finalData = response
      console.log(finalData);
      return finalData;
    }, (error) => {
      console.log(error);
    });
  };
  
  const returnResults = () => {
    return finalData;
  };
  
  return {
    getRecipeRequest,
    returnResults
  };
  
}

angular
  .module("App")
  .factory("RecipeRequest", RecipeRequest);