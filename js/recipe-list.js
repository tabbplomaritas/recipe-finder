"use strict";

const recipeList = {
  bindings: {
    result: "<"
  },
  template: `
      <h1>{{$ctrl.result.recipe.label}}</h1>
  `,
  controller: ["RecipeRequest", function(RecipeRequest) {
    const vm = this;

  }]
};
// .data.hits[1].recipe.label
angular
  .module("App")
  .component("recipeList", recipeList);