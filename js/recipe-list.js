"use strict";

const recipeList = {
  bindings: {
    result: "<"
  },
  template: `
     
      <div class="recipeThumbs" ng-repeat="item in $ctrl.result.data.hits">
        <div class="starCont">  
          <h1>{{item.recipe.label}}</h1>
          <i class="material-icons" ng-click="$ctrl.favoriteToAdd(item);">grade</i>
        </div>
        <img src="{{ item.recipe.image }}" >
        <p>Calories: </p>
      </div>
  `,
  controller: ["RecipeRequest", function(RecipeRequest) {
    const vm = this;

    vm.favoriteToAdd = (newFavorite) => {
      RecipeRequest.addFavorite(newFavorite);
      console.log(newFavorite);
    }

    // vm.newRecipe = {
    //   recipeTitle: vm.result.data.hits.recipe.label,
    //   recipeImg: vm.result.data.hits.recipe.img,
    //   recipeIngred: vm.result.data.hits.recipe.img
    // }.data.hits["0"].recipe.url
    

  }]
};
// .data.hits[1].recipe.label
angular
  .module("App")
  .component("recipeList", recipeList);