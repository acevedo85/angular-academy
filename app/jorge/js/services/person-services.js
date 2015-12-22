/**
 * Created by Academia on 12/20/2015.
 */
angular.module("myApp")
    .factory("Person", ['$http', function PersonFactory ($http) {

        return{
            all: function(){
                var url = "https://api.themoviedb.org/3/person/popular?api_key=a7ec4df65d557dd27df7c831fd851256";
                return $http({method: "GET" , url: url});
            },
            show: function (id) {
                var url = "https://api.themoviedb.org/3/person/"+ id +"?api_key=a7ec4df65d557dd27df7c831fd851256";
                return $http({method: "GET" , url: url});
            }
        }
    }]);