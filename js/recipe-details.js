"use strict";

const recipeDetails = {
   
    template: `
        <div class="recipe">
        <div class="sectionHeader"
            <h2>{{$ctrl.clickedRecipe.recipe.label}}</h2>
            <a href="#!/search-criteria"><i class="material-icons">cancel</i></a>
        </div>
            <img src="{{ $ctrl.clickedRecipe.recipe.image }}">
            <h4>Prep Time: <spanclass="recipeSmallFont">{{ $ctrl.clickedRecipe.recipe.totalTime }}</spanclass> Minutes</h4>
            <h4 class="ingredients">Ingredients:</h4>
            <ul>
                <li class="recipeSmallFont" ng-repeat="ingredients in $ctrl.clickedRecipe.recipe.ingredientLines">{{ ingredients }}</li>
            </ul>
            <p><a href="{{ $ctrl.clickedRecipe.recipe.url }}" target="_blank">Click here</a> for instructions.</p>
        </div>
    `,
    controller: ["RecipeRequest", function(RecipeRequest) {
        const vm = this;
        vm.clickedRecipe = RecipeRequest.viewDetails();
        console.log(vm.clickedRecipe);
        
    }]
}

angular
    .module("App")
    .component("recipeDetails", recipeDetails);