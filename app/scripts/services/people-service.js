'use strict';

angular
    .module('app')
    .service('PeopleService', ['$http', '$q', function($http, $q){

    function fetchPeople(){
        var deferred = $q.defer();

        $http.get("json/users.json").then(function(response){
          deferred.resolve(response.data.users);
        },function(response){
          deferred.reject(response);
        });

        return deferred.promise;
    }

    function fetchPerson(id){

      var deferred = $q.defer();

      $http.get("/json/"+id+".json").then(
            function(response){
              deferred.resolve(response.data.data);
            },
            function(response){
              deferred.reject(response);
            }
        );

      return deferred.promise;
    }

    
    return {fetchPeople: fetchPeople,
            fetchPerson: fetchPerson};

}]);