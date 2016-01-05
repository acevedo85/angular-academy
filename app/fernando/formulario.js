'use strict';

angular.module('myApp.formulario', [])

	.directive('panelFormulario', function () {
		return{
			restrict: 'E',     // 'A' para Atributo .. // 'E' para Elemento    Ej: <price-title> </price-title>
			templateUrl: 'fernando/panel-formulario.html',
			controller: function(){
				this.tab = 1;
				this.booze = {};
				this.setBooze = function(booze) {
					this.booze = booze;
				};
				this.getBooze = function() {
					return this.booze;
				};
				this.setTab = function(setTab){
					this.tab = setTab;
				};

				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs: 'Panel'
		};
	});
