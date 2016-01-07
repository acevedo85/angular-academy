angular.module('myApp.main', ['ngMaterial', 'ngMdIcons'])
.controller('mainController', ['$mdSidenav', '$http', function($mdSidenav, $http) {
    var vm = this;

    vm.toggleLeft = function() {
        $mdSidenav('left-nav').toggle();
    };

    vm.close = function() {
        $mdSidenav('left-nav').close();
    };
    var academy = this;
    academy.devs = [];
    $http.get('data/team.json').success(function (data) {
            academy.devs = data;
        })
        .error(function(){
            console.log("Not working")
        })
}])
    .controller('devController', ['$http' , function ($http) {

    }]);


