(function() {
  'use strict';

  angular
    .module('horseFrontend')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider,$locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
         accessRequired: false
      })
        .state('about', {
        url: '/about',
        templateUrl: 'app/main/about.html',
         accessRequired: false
      })
    .state('login', {
        url: '/login',
        templateUrl: 'app/main/login.html',
        controller: 'LoginController',
        controllerAs: 'login',
         accessRequired: false
      })
    .state('app', {
        url: '/app',
        templateUrl: 'app/main/app.html' ,
        controller: 'AppController',
        controllerAs: 'app',
         accessRequired: true
      })
    .state('contact', {
        url: '/contact',
        templateUrl: 'app/main/contact.html',
         accessRequired: false
      });

    $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
  }

})();
