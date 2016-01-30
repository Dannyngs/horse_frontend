(function() {
  'use strict';

  angular
    .module('horseFrontend')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($rootScope,$scope, UserService, $location,toastr,SocketService) {
  
      $scope.UserLogin = function() {
 	
         
       
        $rootScope.buttonDisabled =   1
       SocketService.emit("login",{ username: $scope.username, password: $scope.password })

                   
                             
        
       
    
    
    
    
    
    
    }
      
        
        

    
  }
})();