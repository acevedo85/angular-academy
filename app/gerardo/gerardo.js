'use strict';

angular.module('myApp.gerardo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gerardo', {
    templateUrl: 'gerardo/gerardo.html',
    controller: 'storeController'
  });
}])

.controller('storeController', ['$http', '$scope',function($http, $scope) {
  var store = this;
  store.productos = [];
  //Leemos el archivo JSON usando el servicio $http (Caso de exito, si está bien escrito JSON)
  $http.get('gerardo/listGera.json').success(function(data){
    store.productos = data;
  })
  //Y si falla la lectura de JSON
  $http.get('gerardo/listGera.json').error(function(data){
    console.log("No funciona JSON");
  })
  this.review = {};
  this.addReview = function(producto) {
    producto.opiniones.push(this.review);
    this.review = {};
    $scope.reviewForm.$setPristine();
  };
}]);