angular.module('myApp')
		.directive("pageTitle", function () {
			return {
				restrict: 'A',
				templateUrl: 'diego/html/title.html'
			}
		})
			.controller('StoreController', ['$http', function ($http) {
				var store = this;
				store.items = [];
				$http.get('diego/data/data2.json').success(function(data) {
					store.items = data;
				});

				this.getPokemon = function(generacion) {
					return generacion.starters;
				};
			}])
			.controller('ReviewController', ['$scope', function ($scope) {
				this.review = {};
				this.addReview = function(item) {
					console.log(this.review.rate);
					this.review.rate = parseInt(this.review.rate);
					item.opiniones.push(this.review);
					this.review = {};
					$scope.reviewForm.$setPristine();
					this.review.rate = 0;
				};
			}]);
