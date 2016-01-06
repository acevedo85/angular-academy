(function(){
	var app = angular.module('book-review', []);

	app.directive('allReviews', function(){
		return {
			restrict: 'E',
			templateUrl: 'fritz/all-reviews.html'
		};
	});

	app.directive('addReview', function(){
		return {
			restrict: 'E',
			templateUrl: 'fritz/add-review.html',
			// link: function(){
			// 	angular.element(document).ready(function (){
			// 		$('')
			// 	});
			// }
		};
	});
})();