"use strict";

const recipeDetails = {
   
    template: `
        <div class="recipe">
            <h1>{{$ctrl.clickedRecipe.recipe.label}}</h1>
            <img src="{{ $ctrl.clickedRecipe.recipe.image }}">
            <p>Ingredients:</p>
            <ul>
                <li ng-repeat="ingredients in $ctrl.clickedRecipe.recipe.ingredientLines">{{ ingredients }}</li>
            </ul>
            <p>Prep Time: {{ $ctrl.clickedRecipe.recipe.totalTime }} Minutes</p>
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