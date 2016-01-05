'use strict';

angular.module('myApp.axel', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/axel',{
            templateUrl: 'axel/axel.html',
            controller: 'storeController'
        });
    }])
    .controller('storeController1', ['$http', '$scope', function($http, $scope){
            var store = this;
            store.products = [];
            $http.get('axel/list.json').success(function(data){
                store.products = data;
                console.log(data);
            });
            //this.products=gem;
            this.comm={};
            this.date=new Date();
            this.addComm=function(product){
                product.reviews.push(this.comm);
                this.comm={};
                $scope.reviewForm.$setPristine();
            };
        }]);