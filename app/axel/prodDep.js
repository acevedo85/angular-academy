'use strict';

angular.module('myApp.prod', [])
    .directive("valData", function(){
        return{
            restrict: 'E',
            templateUrl: 'axel/autor.html'
        }
    })
        .directive("panelsInfo", function(){
            return{
                restrict: 'E',
                templateUrl: 'axel/panels.html',
                controller: function(){
                    this.tab= 0;
                    this.setTab=function(setTab){
                        this.tab=setTab;
                    };

                    this.isSelected = function(checkTab){
                        return this.tab===checkTab;
                    };
                },
                controllerAs: 'panels'
            };
        });