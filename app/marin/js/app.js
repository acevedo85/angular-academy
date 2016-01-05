'use strict';
var car=[];
var posicion;
angular.module('myApp.marin', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/marin', {
				templateUrl: 'marin/index.html',
				controller: 'StoreController3'
			});
	}])
	.controller('StoreController3', ['$http', '$scope', function ($http, $scope) {
		//mover la variable adentro del controlador ya que no se ocupara en ningubn otro contexto

		//contenido del controlador gettin
		this.arreglo=car;
		this.getCar= function(posicion)
		{
			return this.arreglo[posicion];
		};
		//contenido del controlador StoreController original
		var store=this;
		store.cars=[];

		$http.get('marin/list.json').success(function(data)
		{
			console.log(data);
			store.cars=data;

		});
		$http.get('marin/list.json').error(function(data)
		{
			console.log("Bye jason");

		});
		//contenido del controlador ReviewController
		this.review={};
		this.addReview= function(car)
		{

			posicion=cars.opiniones.push(this.review);
			f= new Date();
			cars.opiniones[posicion-1].fecha=f.getDay() + "/" + (f.getMonth()+1) + "/"+f.getFullYear();
			this.review={};
			$scope.reviewForm.$setPristine();
		};

	}]);
