'use strict';

angular.module('myApp')
.controller('storeController', ['$http', function($http) {
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

}])
.controller("reviewController", ['$scope', function($scope){
  this.review = {};
  this.addReview = function(producto) {
    producto.opiniones.push(this.review);
    this.review = {};
    $scope.reviewForm.$setPristine();
  };
}]);