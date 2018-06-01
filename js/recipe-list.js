"use strict";

const recipeList = {
  bindings: {
    result: "<"
  },
  template: `
     
      <div class="recipeThumbs" ng-click="$ctrl.sendRecipeDetails(item);" ng-repeat="item in $ctrl.result.data.hits" item="item">
        <div class="starCont">  
          <h4 class="recipelabel">{{item.recipe.label}}</h4>
          <i class="material-icons !fav" ng-class="{'!fav': fav, 'fav': !fav}"  ng-click="!fav=fav; $ctrl.addToFavorite(item); $event.stopPropagation();">grade</i>
        </div>
        <img src="{{ item.recipe.image }}" >
        
      </div>
  `,
  controller: ["RecipeRequest", function(RecipeRequest) {
    const vm = this;

    if (vm.result === null) {
      vm.result = RecipeRequest.returnResuts();
    }

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

  }]
};




angular
  .module("App")
  .component("recipeList", recipeList);