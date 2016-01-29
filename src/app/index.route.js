(function() {
  'use strict';

  angular
    .module('horseFrontend')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
        .state('about', {
        url: '/about',
        templateUrl: 'app/main/about.html'
      })
    .state('service', {
        url: '/service',
        templateUrl: 'app/main/app.html' ,
        controller: 'AppController',
        controllerAs: 'app'
      })
    .state('contact', {
        url: '/contact',
        templateUrl: 'app/main/contact.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
