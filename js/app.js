var lifescompass = angular.module('lifescompass', ['ui.router','ngAnimate', 'ngSanitize']);


lifescompass.config(function($stateProvider,$urlRouterProvider,$httpProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: './views/home.html',
      controller: 'homeCtrl'
    })
    .state('benefits',{
      url: '/benefits',
      templateUrl: './views/benefits.html',
      controller: 'benefitsCtrl'
    })
    .state('career',{
      url: '/career',
      templateUrl: './views/career.html',
      controller: 'careerCtrl'
    })
    .state('divorce',{
      url: '/divorce',
      templateUrl: './views/divorce.html',
      controller: 'divorceCtrl'
    })
    .state('equestrian',{
      url: '/equestrian',
      templateUrl: './views/equestrian.html',
      controller: 'equestrianCtrl'
    })
    .state('life',{
      url: '/life',
      templateUrl: './views/life.html',
      controller: 'lifeCtrl'
    })
    .state('resources',{
      url: '/resources',
      templateUrl: './views/resources.html',
      controller: 'resourcesCtrl'
    })
    .state('michele',{
      url: '/michele',
      templateUrl: './views/michele.html',
      controller: 'micheleCtrl'
    })
    .state('success',{
      url: '/success',
      templateUrl: './views/success.html',
      controller: 'successCtrl'
    })
    .state('testimonies',{
      url: '/testimonies',
      templateUrl: './views/testimonies.html',
      controller: 'testimoniesCtrl'
    })
});
