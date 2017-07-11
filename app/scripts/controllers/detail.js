'use strict';

/**
 * @ngdoc function
 * @name app.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('DetailCtrl', ['PeopleService', '$routeParams', function (PeopleService, $routeParams) {

  		var main = this;
    	PeopleService.fetchPerson($routeParams.id).then(function(datos){
    			main.person = datos;
    		},
    		function(error){
    			main.person = null;
    			console.error(error);
    		}
    	);
    
}]);
