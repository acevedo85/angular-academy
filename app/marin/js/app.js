(function()
{

	var app = angular.module('store',[]);
	var car=[];
	app.controller('getting', function()
	{
		this.arreglo=car;
		this.getCar= function(pos)
		{
			return this.arreglo[pos];
		};
	});
	app.controller('StoreController3',['$http',function($http)
	{
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

	}]);
	app.controller('ReviewControllerM',['$scope', function($scope)
	{
		this.review={};
		this.addReview= function(car)
		{

			pos=car.opiniones.push(this.review);
			f= new Date();
			car.opiniones[pos-1].fecha=f.getDay() + "/" + (f.getMonth()+1) + "/"+f.getFullYear();
			this.review={};
			$scope.reviewForm.$setPristine();
		};
	}]);

})();
