"use strict";

const recipeDetails = {
   
    template: `
        <div class="recipe">
            <h1>this is working</h1>
            <h1>{{clickedRecipe.recipe.label}}</h1>
            <img src="{{ item.recipe.image }}">
            <p>Ingredients: {{}} </p>
            <p>Prep Time: {{}}</p>
            <p><a href="{{item.recipe.url}}" target="_blank">Click here</a> for instructions.</p>
        </div>
    `,
    controller: ["RecipeRequest", function(RecipeRequest) {
        const vm = this;
        vm.clickedRecipe = RecipeRequest.viewDetails();
        console.log(clickedRecipe);
        
        
    }]
}

angular
    .module("App")
    .component("recipeDetails", recipeDetails);