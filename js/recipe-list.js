"use strict";

const recipeList = {
  bindings: {
    result: "<"
  },
  template: `
     
      <div class="recipeThumbs" ng-click="$ctrl.sendRecipeDetails(item);" ng-repeat="item in $ctrl.result.data.hits" item="item">
        <div class="starCont">  
<<<<<<< HEAD
          <h1>{{item.recipe.label}}</h1>
          <i class="material-icons" ng-click="$ctrl.addToFavorite(item); $event.stopPropagation();">grade</i>
=======
          <h4 class="recipelabel">{{item.recipe.label}}</h4>
          <i class="material-icons" ng-click="$ctrl.addToFavorite(item);">grade</i>
>>>>>>> eb486ac30b4e09cdb403e4bd770d9fd6dc02222a
        </div>
        <img src="{{ item.recipe.image }}" >
        </p>
      </div>
  `,
  controller: ["RecipeRequest", function(RecipeRequest) {
    const vm = this;

    vm.addToFavorite = (item) => {
      RecipeRequest.addFavorite(item);
      console.log(item);
    }
    
    vm.sendRecipeDetails = (item) => {
      RecipeRequest.sendDetails(item);
      console.log(item);      
    }

    vm.removeFavorite = (item) => {
      RecipeRequest.removeFavorite(item);
      console.log(item);  
    }
    

    // vm.newRecipe = {
    //   recipeTitle: vm.result.data.hits.recipe.label,
    //   recipeImg: vm.result.data.hits.recipe.img,
    //   recipeIngred: vm.result.data.hits.recipe.img
    // }.data.hits["0"].recipe.url
    

  }]
};
// .data.hits[1].recipe.label

recipeList.$inject = 

angular
  .module("App")
  .component("recipeList", recipeList);