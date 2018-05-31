"use strict";

const searchCriteria = {
  template: `
  <h2 class="viewHeader">Find your next culinary experiment!</h2>
  <form ng-submit="$ctrl.sendRequest($ctrl.query, $ctrl.prepTime, $ctrl.calories);">
    <div class="searchWrapper">
      <input type="text" ng-model="$ctrl.query" placeholder="Enter a search query">
      <button class="searchButton">
        <img src="assets/Icons/search.svg">
        </button>
    </div>
      <div class="prepTime">
        <h3>Prep time</h3>
        <div class="options">
          <input name="prepTime" type="radio" ng-model="$ctrl.prepTime" ng-value="$ctrl.prepTime020">
          <label>0-20 Minutes</label>
          <input name="prepTime" type="radio" ng-model="$ctrl.prepTime" ng-value="$ctrl.prepTime2040">
          <label>20-40 Minutes</label>
          
          <input name="prepTime" type="radio" ng-model="$ctrl.prepTime" ng-value="$ctrl.prepTime4060">
          <label>40-60 Minutes</label>
         
          <input name="prepTime" type="radio" ng-model="$ctrl.prepTime" ng-value="$ctrl.prepTime60">
          <label>60+ Minutes</label>
        </div>
      </div>

      <div class="calories">
        <h3>Calories in recipe</h3>
        <div class="options">
          <label>0-1000 Calories</label>
          <input name="calories" type="radio" ng-model="$ctrl.calories" ng-value="$ctrl.calories0">
          <label>1000 - 1500 Calories</label>
          <input name="calories" type="radio" ng-model="$ctrl.calories" ng-value="$ctrl.calories1000">
          <label>1500 - 2000 Calories </label>
          <input name="calories" type="radio" ng-model="$ctrl.calories" ng-value="$ctrl.calories1500">
          <label>2000+ Calories</label>
          <input name="calories" type="radio" ng-model="$ctrl.calories" ng-value="$ctrl.calories2000">
        </div>
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
      vm.prepTime020 ="&time=0-20";
      vm.prepTime2040 ="&time=20-40";
      vm.prepTime4060 ="&time=40-60";
      vm.prepTime60 ="&time=60%2B";

      vm.calories0 ="&calories=0-1000";
      vm.calories1000 ="&calories=1000-1500";
      vm.calories1500 ="&calories=1500-2000";
      vm.calories2000 ="&calories=2000%2B";
     


    vm.sendRequest = (query, prepTime, calories) => {

      RecipeRequest.getRecipeRequest(query, prepTime, calories).then((data) => {
        vm.result = data;

        console.log(vm.prepTime);
        console.log(vm.calories);
        
      });
    }

  }]
};


angular
  .module("App")
  .component("searchCriteria", searchCriteria);