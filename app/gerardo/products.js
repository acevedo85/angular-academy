/**
 * Created by Academia on 12/20/2015.
 */
'use strict';

angular.module('myApp.productsDirect', [])

.directive("productoName", function () {
    return {
        restrict: 'E',
        templateUrl: 'gerardo/htmls/productoName.html'
    };
})
.directive("productoArtist", function(){
    return {
        restrict: 'E',
        templateUrl: 'gerardo/htmls/productoArtist.html'
    };
})
.directive("galeriaProductos", function () {
    return {
        restrict: 'E',
        templateUrl: 'gerardo/htmls/galeriaProductos.html'
    };
})
.directive("productosHeader", function () {
    return {
        restrict: 'E',
        templateUrl: 'gerardo/htmls/productosHeader.html'
    };
})
.directive("panelesProductos", function () {
    return{
        restrict: 'E',
        templateUrl: 'gerardo/htmls/PanelesProductos.html',
        controller: function()
        {
            this.tab = 0; //0 -->No tab selected at startup
            this.setTab = function(setTab) {
                this.tab = setTab;
            };
            this.isSelected = function(checkTab){
                return this.tab === checkTab;
            };
        },
        controllerAs: ''
    };
})