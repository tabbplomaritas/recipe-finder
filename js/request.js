"use strict";

  const request = {
    template: `
    <input type="text" ng-model-"$ctrl.query" placeholder="Enter a search query">
    <button type="button" ng-click="$ctrl.sendRequest($ctrl.query);">Get the some info</button>

    `,
    controller: ["RecipeRequest", function(RecipeRequest) {
      const vm = this;
      vm.sendRequest = (query) => {
        RecipeRequest.getRecipeRequest(query).then((data) => {
          vm.result = data;
          console.log(vm.result);
        });
      }
    }]
  };

angular
  .module("App")
  .component("request", request);