"use strict";

  const searchCriteria = {
    template: `
      <form ng-submit="$ctrl.sendRequest($ctrl.query);">
        <input type="text" ng-model-"$ctrl.query" placeholder="Enter a search query">
        <button>Search</button>
      </form>
      <div>
        <recipe-list ng-repeat="item in $ctrl.result.data.hits" result="result"></recipe-list> 
      </div>
    `,
    controller: ["RecipeRequest", function(RecipeRequest) {
      const vm = this;

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