var lifescompass = angular.module('lifescompass', ['ui.router','ngAnimate', 'ngSanitize']);


lifescompass.config(function($stateProvider,$urlRouterProvider,$httpProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: './views/home.html',
      controller: 'mainCtrl'
    })
    .state('benefits',{
      url: '/benefits',
      templateUrl: './views/benefits.html',
      controller: 'mainCtrl'
    })
    .state('career',{
      url: '/career',
      templateUrl: './views/career.html',
      controller: 'mainCtrl'
    })
    .state('career-student',{
      url: '/career/student',
      templateUrl: './views/career-student.html',
      controller: 'mainCtrl'
    })
    .state('career-mid',{
      url: '/career/mid',
      templateUrl: './views/career-mid.html',
      controller: 'mainCtrl'
    })
    .state('executive',{
      url: '/executive',
      templateUrl: './views/executive.html',
      controller: 'mainCtrl'
    })
    .state('divorce',{
      url: '/divorce',
      templateUrl: './views/divorce.html',
      controller: 'mainCtrl'
    })
    .state('equestrian',{
      url: '/equestrian',
      templateUrl: './views/equestrian.html',
      controller: 'mainCtrl'
    })
    .state('life',{
      url: '/life',
      templateUrl: './views/life.html',
      controller: 'mainCtrl'
    })
    .state('resources',{
      url: '/resources',
      templateUrl: './views/resources.html',
      controller: 'mainCtrl'
    })
    .state('michele',{
      url: '/michele',
      templateUrl: './views/michele.html',
      controller: 'mainCtrl'
    })
    .state('success',{
      url: '/success',
      templateUrl: './views/success.html',
      controller: 'mainCtrl'
    })
    .state('testimonials',{
      url: '/testimonials',
      templateUrl: './views/testimonials.html',
      controller: 'mainCtrl'
    })
    .state('contact',{
      url: '/contact',
      templateUrl: './views/contact.html',
      controller: 'mainCtrl'
    })
});

lifescompass.run(function($rootScope, $state) {
  $rootScope.$on("$stateChangeSuccess", function (event, currentRoute, previousRoute) {
      window.scrollTo(0, 0);
  });
});
