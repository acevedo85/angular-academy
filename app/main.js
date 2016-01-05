angular.module('myApp.main', ['ngMaterial', 'ngMdIcons'])
.controller('mainController', ['$mdSidenav', function($mdSidenav) {
    var vm = this;

    vm.toggleLeft = function() {
        $mdSidenav('left-nav').toggle();
    };

    vm.close = function() {
        $mdSidenav('left-nav').close();
    }
}])

