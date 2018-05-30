"use strict";

const recipeList = {
  template: `

  `,
  controller: ["RecipeRequest", function(RecipeRequest) {
    const vm = this;

  }]
};

angular
  .module("App")
  .component("recipeList", recipeList);