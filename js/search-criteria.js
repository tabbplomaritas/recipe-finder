"use strict";

  const searchCriteria = {
    template: `
    <section class="view-area">
      <form ng-submit="$ctrl.sendRequest($ctrl.query);">
        <input type="text" ng-model-"$ctrl.query" placeholder="Enter a search query">
        <button type="button" ng-click="ng-submit">Get the some info</button>
      </form>
    </section>
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

  console.log("searchCriteria")


angular
  .module("App")
  .component("searchCriteria", searchCriteria);