'use strict';
angular.module('myApp')
    .controller('storeController1', ['$http', function($http){
            var store = this;
            store.products = [];
            $http.get('axel/list.json').success(function(data){
                store.products = data;
                console.log(data);
            });
        }])
    .controller("commentController", ['$scope', function ($scope) {
        this.comm={};
        this.date=new Date();
        this.addComm=function(product){
            product.reviews.push(this.comm);
            this.comm={};
            $scope.reviewForm.$setPristine();
        };
    }]);