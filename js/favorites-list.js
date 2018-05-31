"use strict";

const favoritesList = {
  template: `
      <div class="recipeThumbs" ng-click="$ctrl.sendRecipeDetails(item)" ng-repeat="item in $ctrl.favorites" item="item">
        <div class="starCont">  
          <h1>{{item.recipe.label}}</h1>
          <i class="material-icons" ng-click="$ctrl.removeFavorite($index);">grade</i>
        </div>
        <img src="{{ item.recipe.image }}" >
        <p>Calories: {{ item.recipe.calories }}</p>
      </div>
  `,
  controller: ["RecipeRequest", function(RecipeRequest) {
    const vm = this;
    vm.favorites = RecipeRequest.getFavorites();

    vm.removeFavorite = (index) => {
      RecipeRequest.removeFavorite(index);
    }

    vm.sendRecipeDetails = (item) => {
      RecipeRequest.sendDetails(item);
      console.log(item);      
    }

  }]
};

angular
  .module("App")
  .component("favoritesList", favoritesList);