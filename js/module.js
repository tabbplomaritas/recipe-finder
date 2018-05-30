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
      .when("/favorites-page", {
        template: "<favorites-page></favorites-page>"
      })
      .otherwise({ redirectTo : "/search-criteria" })
  });