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
        templateUrl: 'app/view/main.html',
        controller: 'MainController',
        controllerAs: 'main',
         accessRequired: false
      })
        .state('about', {
        url: '/about',
        templateUrl: 'app/view/about.html',
         accessRequired: false
      })
     .state('terms', {
        url: '/terms',
        templateUrl: 'app/view/terms.html',
         accessRequired: false
      })
    .state('tutorial', {
        url: '/tutorial',
        templateUrl: 'app/view/tutorial.html',
         accessRequired: false
      })
    .state('login', {
        url: '/login',
        templateUrl: 'app/view/login.html',
        controller: 'LoginController',
        controllerAs: 'login',
         accessRequired: false
      })
    .state('app', {
        url: '/app',
        templateUrl: 'app/view/app.html' ,
        controller: 'AppController',
        controllerAs: 'app',
         accessRequired: true
      })
    .state('contact', {
        url: '/contact',
        templateUrl: 'app/view/contact.html',
         accessRequired: false
      });

    $urlRouterProvider.otherwise('/');
     // $locationProvider.html5Mode(true);
  }

})();
