'use strict';

angular.module('myApp')
	//Movemos los dos controladores a uno solo para optimizar
		.controller("StoreController2", ['$http', function ($http) {
			//Controlador con Funcion del arreglo de objetos
			var store = this;
			store.booze = [];
			$http.get('fernando/list.json').success(function (data){
				store.booze = data;
			})
		}])
		.controller("IconController", function () {
					//Controlador de thumbs
					this.icon = 0;
					this.setIcon = function(setIcon){
						this.icon = setIcon;
					};
					this.isSelected = function(checkIcon){
						return this.iconcon === checkIcon;
					};
				})
		.controller("ReviewController2", ['$scope', function ($scope) {
					//Controlador que ingresa los nuevos reviews
					this.opinion={};
					this.addReview = function(booze){
						booze.review.push(this.opinion);
						this.opinion={};
						$scope.reviewForm.$setPristine();
					};
				}])
		.directive('priceTitle', function () {
				return{
					restrict: 'A',     // 'A' para Atributo .. // 'E' para Elemento    Ej: <price-title> </price-title>
					templateUrl: 'fernando/price-title.html'
				};
			});