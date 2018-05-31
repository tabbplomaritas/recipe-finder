"use strict";

  const searchCriteria = {
    template: `
    <h2 class="viewHeader">Find your next culinary experiment!</h2>
      <form ng-submit="$ctrl.sendRequest($ctrl.query, $ctrl.prepTime);">
        <div class="searchWrapper">
          <input type="text" ng-model="$ctrl.query" placeholder="Enter a search query">
          <button class="searchButton">
            <img src="assets/Icons/search.svg">
          </button>
          <h3>Prep time</h3>
          <label>0-20 Minutes</label>
          <input name="prepTime" type="radio" ng-model="$ctrl.prepTime" ng-value="$ctrl.prepTime020">
          <label>20-40 Minutes</label>
          <input name="prepTime" type="radio" ng-model="$ctrl.prepTime" ng-value="$ctrl.prepTime2040">
          <label>40-60</label>
          <input name="prepTime" type="radio" ng-model="$ctrl.prepTime" ng-value="$ctrl.prepTime4060">
          <label>60+ Minutes</label>
          <input name="prepTime" type="radio" ng-model="$ctrl.prepTime" ng-value="$ctrl.prepTime60">
        </div>
      </form>
      <div>
        <recipe-list result="$ctrl.result"></recipe-list> 
      </div>
    `,
    controller: ["RecipeRequest", function(RecipeRequest) {
      const vm = this;
      vm.result = {};
      vm.newRecipe = {};
      vm.prepTime020 ="0-20";
      vm.prepTime2040 ="20-40";
      vm.prepTime4060 ="40-60";
      vm.prepTime60 ="60%2B";
     

      vm.sendRequest = (query, prepTime) => {
    
        RecipeRequest.getRecipeRequest(query, prepTime).then((data) => {
          vm.result = data;
         
          console.log(vm.prepTime);
        });
      }
    }]
  };


angular
  .module("App")
  .component("searchCriteria", searchCriteria);