'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.gerardo',
    'myApp.productsDirect',
    'myApp.productPanels',
  'myApp.version',
    'ngMaterial',
    'ngMdIcons',
    'myApp.main',
    'myApp.axel',
    'myApp.prod',
    'myApp.diego',
    'myApp.store-pokemon',
    'myApp.fernando',
    'myApp.formulario',
    'myApp.marin',
    'myApp.store-product'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/gerardo',{
        templateUrl: 'gerardo/gerardo.html'
      })
      .when('/jorge',{
          templateUrl: 'jorge/templates/pages/movies/index.html',
          controller: 'MoviesIndexController'
      })
      .when('/jorge/movies',{
        templateUrl: 'jorge/templates/pages/movies/index.html',
        controller: 'MoviesIndexController'
      })
      .when('/jorge/movies/:id',{
        templateUrl: 'jorge/templates/pages/movies/show.html',
        controller: 'MoviesShowController'
      })
      .when('/jorge/tv',{
        templateUrl: 'jorge/templates/pages/tv/index.html',
        controller: 'TvIndexController'
      })
      .when('/jorge/tv/:id',{
        templateUrl: 'jorge/templates/pages/tv/show.html',
        controller: 'TvShowController'
      })
      .when('/jorge/persons',{
        templateUrl: 'jorge/templates/pages/persons/index.html',
        controller: 'PersonsIndexController'
      })
      .when('/jorge/persons/:id',{
        templateUrl: 'jorge/templates/pages/persons/show.html',
        controller: 'PersonsShowController'
      })
      .when('/axel', {
          templateUrl: 'axel/axel.html'
      })
      .when('/diego', {
          templateUrl: 'diego/diego.html'
      })
      .when('/fernando', {
          templateUrl: 'fernando/index.html'
      })
      .when('/marin', {
          templateUrl: 'marin/index.html'
      })
      .otherwise({redirectTo: '/gerardo'});
}]);
