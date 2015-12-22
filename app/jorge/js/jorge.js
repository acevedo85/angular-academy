'use strict';
angular.module('myApp')
    .controller("MoviesIndexController", function($scope, Movie){
        // $scope.movies = [];
        Movie.all()
            .success(function(data, status, headers, config){
                if (status == 200) {
                    $scope.movies = data.results;
                    console.log($scope.movies)
                }else{
                    console.error('Error al cargar la lista')
                }
            })
            .error(function(data, status, headers, config){
                console.error('Error al cargar la lista')
            });
    })
    .controller('MoviesShowController', function($routeParams, Movie, $scope){
      $scope.m = {};
      Movie.show($routeParams.id)
          .success(function(data, status, headers, config){
            if (status == 200) {
              $scope.m = data;
              console.log($scope.m)
            }else{
              console.error('Error al cargar la lista')
            }
          })
          .error(function(data, status, headers, config){
            console.error('Error al cargar la lista')
          });
    })
    .controller("TvIndexController", function($scope, Tv){
      // $scope.movies = [];
      Tv.all()
          .success(function(data, status, headers, config){
            if (status == 200) {
              $scope.tvs = data.results;
              console.log($scope.tvs)
            }else{
              console.error('Error al cargar la lista')
            }
          })
          .error(function(data, status, headers, config){
            console.error('Error al cargar la lista')
          });
    })
    .controller('TvShowController', function($routeParams, Tv, $scope){
      $scope.t = {};
      Tv.show($routeParams.id)
          .success(function(data, status, headers, config){
            if (status == 200) {
              $scope.t = data;
              console.log($scope.t)
            }else{
              console.error('Error al cargar la lista')
            }
          })
          .error(function(data, status, headers, config){
            console.error('Error al cargar la lista')
          });
    })
    .controller('PersonsShowController', function($routeParams, Person, $scope){
      $scope.p = {};
      Person.show($routeParams.id)
          .success(function(data, status, headers, config){
            if (status == 200) {
              $scope.p = data;
              console.log($scope.p)
            }else{
              console.error('Error al cargar la lista')
            }
          })
          .error(function(data, status, headers, config){
            console.error('Error al cargar la lista')
          });
    })
    .controller("PersonsIndexController", function($scope, Person){
      // $scope.movies = [];
      Person.all()
          .success(function(data, status, headers, config){
            if (status == 200) {
              $scope.persons = data.results;
              console.log($scope.persons)
            }else{
              console.error('Error al cargar la lista')
            }
          })
          .error(function(data, status, headers, config){
            console.error('Error al cargar la lista')
          });
    })