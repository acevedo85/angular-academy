(function(){
	var app = angular.module('storeF', []);

	app.controller('storeControllerF', ['$http', function($http) {
		var store = this;
		store.productos = [];
		$http.get('fritz/book.json').success(function (data){
			store.productos = data;
		});
		
	}]);

	app.controller('orderBooks', function(){
		this.predicate = 'title';
		this.reverse = false;
		this.order = function(predicate){
			this.reverse = this.predicate === predicate ? !this.reverse : false;
			this.predicate = predicate;
		}
	});

	app.controller('displayDescription', function(){
		this.hiddenDescription = true;
		this.opacity = 0;
		this.hideDescription = function(hideDescription, opacity){
			this.hiddenDescription = hideDescription;
			this.opacity = opacity;
		}
		this.isHidden = function(){
			return this.hiddenDescription;
		}
		this.hide = function(){
			return this.opacity;
		}
	});

	app.controller('addReview', ['$scope', function(){
		this.review = {};
		this.addNew = function(producto){
			this.review = {};
			$scope.reviewForm.$setPristine();
		};
	}]);
})();