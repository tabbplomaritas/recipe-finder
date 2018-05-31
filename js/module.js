"use strict";

angular
  .module("App", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/search-criteria", {
        template: "<search-criteria></search-criteria>"
      })
      .when("/recipe-list", {
        template: "<recipe-list></recipe-list>"
      })
      .when("/favorites-list", {
        template: "<favorites-list></favorites-list>"
      })
      .when("/recipe-details", {
        template: "<recipe-details></recipe-details>"
      })
      .otherwise({ redirectTo : "/search-criteria" })
  });