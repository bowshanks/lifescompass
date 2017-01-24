var lifescompass = angular.module('lifescompass', ['ui.router','ngAnimate', 'ngSanitize']);


lifescompass.config(function($stateProvider,$urlRouterProvider,$httpProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: './views/home.html',
      controller: 'homeCtrl'
    })
    // .state('admin',{
    //   url: '/admin',
    //   templateUrl: './views/admin.html',
    //   controller: 'adminCtrl'
    // })
});
