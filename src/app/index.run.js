(function() {
  'use strict';

  angular
    .module('horseFrontend')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log,$rootScope,UserService,$location) {

   $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
           
       console.log('Trying to go to '+UserService.get())

           
            if(toState.accessRequired){
                 if (!UserService.isLoggedIn()) {
                   
                   return $location.path('/login')
                }
                
             }
            
            if (toState.templateUrl === 'app/main/app.html' && UserService.isLoggedIn()) {
                
                $location.path('/app')
            }
            
           
         
            
        });
        
  }

})();
