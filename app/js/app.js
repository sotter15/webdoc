var myApp = angular.module('Sotterranea', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider




  .state('home', {
    url: "/home",
    templateUrl: "templates/home.html",
    controller: 'HomeCtrl'
  })


.state('atti', {
  url: "/atti",
  templateUrl: "templates/atti.html",
  controller: 'AttiCtrl'

  })
});
