var app=angular.module("myApp",['ngRoute']);
app.controller("myCtrl",function($scope,$http){
    $http.get("https://swapi.co/api/").then(function(response){
      // pulling paths
      $scope.root= response.data;
      $scope.people=response.data.people;
      $scope.planets=response.data.planets;
      $scope.films=response.data.films;
      $scope.starships=response.data.starships;

       var a =$scope.people;
      $http.get(a).then(function(response){
        $scope.peopledata=response.data.results;
        console.log($scope.peopledata);

      });
      $http.get($scope.starships).then(function(response){
        $scope.starshipdata=response.data.results;
        console.log($scope.starshipdata);

      });
      $http.get($scope.films).then(function(response){
        $scope.filmdata=response.data.results;
        console.log($scope.filmdata);


      });
      var planets=$scope.planets;
      $http.get(planets).then(function(response){
        $scope.planetsdata=response.data.results;
        console.log($scope.planetsdata);
      });


      // console.log($scope.root);
      console.log($scope.people);
      console.log($scope.planets);
      console.log($scope.films);
      console.log($scope.starships);
    });




});
app.config(function($routeProvider){

  $routeProvider
  .when('/characters',{
       templateUrl:"localhost:8888/chars.html"
  })
  .when('/starships',{
       templateUrl:'localhost:8888/starships.html'
  })
  .when('/films',{
       templateUrl:'localhost:8888/films.html'
  })
  .when('/planets',{
       template:"planets.html"
  })
  .otherwise({
    templateUrl:"index.html"
  })

});
// function jumpScroll() {
//    	window.scroll(0,150); // horizontal and vertical scroll targets
// }
