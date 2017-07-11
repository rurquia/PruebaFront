'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('MainCtrl', ['PeopleService', function (PeopleService) {

  		var main = this;
    	PeopleService.fetchPeople().then(function(datos){
    			main.people = datos;
    		},
    		function(error){
    			main.person = null;
    			console.error(error);
    		}
    	);
    
}]);
