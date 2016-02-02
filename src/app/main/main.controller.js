(function() {
  'use strict';

  angular
    .module('horseFrontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,$timeout, toastr,$translate) {
  $scope.changeLanguage = function (key) {
       
    $translate.use(key);
  };

    
  }
})();
