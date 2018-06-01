"use strict";

const recipeList = {
  bindings: {
    result: "<"
  },
  template: `
     
      <div class="recipeThumbs" ng-click="$ctrl.sendRecipeDetails(item);" ng-repeat="item in $ctrl.result.data.hits" item="item">
        <div class="starCont">  
          <h4 class="recipelabel">{{item.recipe.label}}</h4>
          <i class="material-icons faveButton" ng-click="$ctrl.addToFavorite(item, $event); $event.stopPropagation();">grade</i>
        </div>
        <img src="{{ item.recipe.image }}" >
        
      </div>
  `,
  controller: ["RecipeRequest", function(RecipeRequest) {
    const vm = this;

    

    vm.addToFavorite = (item, $event) => {
      angular.element($event.target).css("color", "#FFFFFF");
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