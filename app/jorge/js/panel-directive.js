/**
 * Created by Academia on 12/20/2015.
 */
angular.module('myApp.productPanels', [])
    .directive("productPanels", function(){
        return{
            restrict: 'E',
            templateUrl: "jorge/templates/pages/partials/panels.html",
            controller: function(){
                this.tab = 1;
                this.setTab = function (setTab) {
                    this.tab = setTab;
                };
                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                };

            },
            controllerAs: 'Panel'
        }
    })
    .directive("navBar", function () {
        return{
            restrict: 'E',
            templateUrl: "jorge/templates/pages/partials/navBar.html"
        }
    });