(function() {
  'use strict';

  angular
    .module('horseFrontend')
    .directive('racenav', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
   function NavbarController($rootScope, UserService, $location,toastr,SocketService) {
  
    
      
         SocketService.logoutfailed(function(res){
                
                toastr.error(res,"Error")
            })
        SocketService.logoutok(function(res){
                
                    UserService.logout()
                    $location.path('/login')
                      toastr.success(res,"success")
            })
      
        SocketService.loginfailed(function(res){
            console.log('login failed')
            toastr.error(res.msg,"Error")
                $rootScope.buttonDisabled =    0
  
            })
          
        SocketService.loginok(function(res){
                        console.log('login ok')
                   $rootScope.buttonDisabled =    0
                    UserService.login(res)
                    $location.path('/app')
                      toastr.success("Welcome Back ! "+res.username,"success")
            })
        
        
        
        
            
        $rootScope.UserLogout = function() {
          
         SocketService.emit('logout',SocketService.id)
            
          
            
 	}
        
        

    
  }
  }

})();