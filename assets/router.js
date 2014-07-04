var router = angular.module("router", ['ngRoute']);

router.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'main.html',
    controller: 'mainCtrl'
  })
  .when('/stream/:stream', {
    templateUrl: 'stream.html',
    controller: 'streamCtrl'
  });
 });
