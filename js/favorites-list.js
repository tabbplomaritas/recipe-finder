"use strict";

const favoritesList = {
  template: `
      <h2 class="viewHeader">My Recipes</h2>
      <div class="recipeThumbs" ng-click="$ctrl.sendRecipeDetails(item)" ng-repeat="item in $ctrl.favorites" item="item">
        <div class="starCont">  
          <h1>{{item.recipe.label}}</h1>
          <i class="material-icons" ng-click="$ctrl.removeFavorite($index);">cancel</i>
        </div>
        <img src="{{ item.recipe.image }}" >
      </div>
  `,
  controller: ["RecipeRequest", function(RecipeRequest) {
    const vm = this;

    // get our favorites data from the service and prepare it to be used locally
    vm.favorites = RecipeRequest.getFavorites();

    // function to send the index of the item we want to remove
    vm.removeFavorite = (index) => {
      RecipeRequest.removeFavorite(index);
    }

    // function to get the detailed view of our saved recipe
    vm.sendRecipeDetails = (item) => {
      RecipeRequest.sendDetails(item);
      console.log(item);      
    }
  }]
};

angular
  .module("App")
  .component("favoritesList", favoritesList);