"use strict";

  const searchCriteria = {
    template: `
    <h2 class="viewHeader">Find your next culinary experiment!</h2>
      <form ng-submit="$ctrl.sendRequest($ctrl.query);">
        <div class="searchWrapper">
          <input type="text" ng-model="$ctrl.query" placeholder="Enter a search query">
          <button class="searchButton">
            <img src="assets/Icons/search.svg">
          </button>
        </div>
        
      </form>
      <div>
        <recipe-list result="$ctrl.result"></recipe-list> 
      </div>
    `,
    controller: ["RecipeRequest", function(RecipeRequest) {
      const vm = this;
      vm.result = {};
      vm.sendRequest = (query) => {
        RecipeRequest.getRecipeRequest(query).then((data) => {
          vm.result = data;
        });
      }
    }]
  };


angular
  .module("App")
  .component("searchCriteria", searchCriteria);