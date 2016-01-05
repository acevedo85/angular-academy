'use strict';

angular.module('myApp.store-product', [])
	.directive('productsTitle', function () {
		return{
			restrict:'E',
			templateUrl:'marin/carritos.html'
		}
	})
		.directive('imgCarro', function () {
			return{
				restrict:'E',
				templateUrl: 'marin/img.html'
			}
		})
			.directive('infoCarro', function () {
				return{
					restrict:'E',
					templateUrl: 'marin/infocarro.html',
					controller: function()
					{
						this.tab=1;
						this.setTab=function(setTab)
						{
							this.tab=setTab;
						};
						this.isSelected=function(chechTab)
						{
							return this.tab=== chechTab;
						};
					},
					controllerAs: 'panel'
				}
			});
