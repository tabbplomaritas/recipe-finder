"use strict";

const searchCriteria = {
  template: `
  <h2 class="viewHeader">Find your next culinary experiment!</h2>
  <form ng-submit="$ctrl.sendRequest($ctrl.query, $ctrl.prepTime, $ctrl.calories);">
    <div class="searchWrapper">
      <input type="text" ng-model="$ctrl.query" placeholder="Enter a search query">
      <button class="searchButton">
      <i class="material-icons">
      search
      </i>
        </button>
    </div>

      <button id="advancedSearchButton" type="button" ng-click="isAdvancedOpen = !isAdvancedOpen">Advanced Search</button>

      <div class="advancedSearch" ng-show="isAdvancedOpen">
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

      <div class="advancedSearch" ng-show="isAdvancedOpen">
        <h3>Calories in recipe</h3>
        <div class="options">
          <input name="calories" type="radio" ng-model="$ctrl.calories" ng-value="$ctrl.calories0">
          <label>0-500 cals</label>
          <input name="calories" type="radio" ng-model="$ctrl.calories" ng-value="$ctrl.calories500">
          <label>500 - 800 cals</label>
          <input name="calories" type="radio" ng-model="$ctrl.calories" ng-value="$ctrl.calories800">
          <label>800 - 1200 cals </label>
          <input name="calories" type="radio" ng-model="$ctrl.calories" ng-value="$ctrl.calories1200">
          <label>1200+ cals</label>
        </div>
      </div>
  </form>
  <div>
    <recipe-list result="$ctrl.result"></recipe-list> 
  </div>
  `,

  controller: ["RecipeRequest", function(RecipeRequest) {
    const vm = this;

    // Set up some variables of strings for search attributes 
    vm.prepTime020 ="&time=0-20";
    vm.prepTime2040 ="&time=20-40";
    vm.prepTime4060 ="&time=40-60";
    vm.prepTime60 ="&time=60%2B";

    vm.calories0 ="&calories=0-500";
    vm.calories500 ="&calories=500-800";
    vm.calories800 ="&calories=800-1200";
    vm.calories1200 ="&calories=1200%2B";
    
    // Set vm.result to whatever finalData is in the service.js 
    vm.result = RecipeRequest.returnResults();

    // function to show the advanced search options
    vm.showAdvanced = () => {
      angular.element(document.querySelectorAll('.advancedSearch') ).css("display", "flex");
    }

    // Send the parameters for the search query we want to do. Pass our query, prepTime and calories as necessary
    vm.sendRequest = (query, prepTime, calories) => {
      RecipeRequest.getRecipeRequest(query, prepTime, calories).then((data) => {
        vm.result = data;
      });
    }
  }]
};

angular
  .module("App")
  .component("searchCriteria", searchCriteria);