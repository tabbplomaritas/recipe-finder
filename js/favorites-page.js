"use strict";

const favoritesPage = {
  bindings: {
    favorite: "<"
  },

  template: `
  <div class="recipeThumbs" ng-repeat="item in $ctrl.result.data.hits">
    <div class="starCont">  
      <h1>{{item.recipe.label}}</h1>
      <i class="material-icons">grade</i>
    </div>
    <img src="{{ item.recipe.image }}" >
    <p>Calories: </p>
  </div>
  `,
  controller: ["RecipeRequest", function(RecipeRequest) {
    const vm = this;

    vm.newRecipe = {
      title: vm.result.data.hits.recipe.label,
      img: vm.result.data.hits.recipe.img,
      ingredients: vm.result.data.hits.recipe.img,
      origUrl: {url},
      origSrc: {source},
    }

  }]
};

angular
  .module("App")
  .component("favoritesPage", favoritesPage);