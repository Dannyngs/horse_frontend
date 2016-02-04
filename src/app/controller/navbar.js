(function() {
  'use strict';

  angular
    .module('horseFrontend')
    .directive('racenav', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/view/navbar.html',
      
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
   function NavbarController($http,$rootScope, UserService, $location,toastr,SocketService,$translate) {
  
    
     
      
      function getWeather(){
          
          
                //Get Race info
    $http({method: 'GET',url: 'http://api.openweathermap.org/data/2.5/find?q=HONGKONG&APPID=595ebb307096a30a2521d0436ebb976f&units=metric '
}).then(
        function successCallback(response) {
     
    $rootScope.temp=response.data.list[0].main.temp;
     $rootScope.humi=response.data.list[0].main.humidity;

        
  }, 
        function errorCallback(response) {
   // toastr.error('Error','Cannot connect to the server,please try it later')
  }
        );
      
          
          
      }
       
        getWeather();
  
         SocketService.logoutfailed(function(res){
                
                toastr.error(res)
            })
        SocketService.logoutok(function(res){
                
                    UserService.logout()
                   $location.path('/login')
                    toastr.success("Good Bye! ",{
  allowHtml: true
})
            })
      
        SocketService.loginfailed(function(res){
            console.log('login failed')
            toastr.error(res.msg)
                $rootScope.buttonDisabled =    0
  
            })
          
        SocketService.loginok(function(res){
                        console.log('login ok')
                   $rootScope.buttonDisabled =    0
                    UserService.login(res)
                    $location.path('/app')
                      toastr.success("Welcome Back ! "+res.username)
            })
        
        
        
        
            
        $rootScope.UserLogout = function() {
           
         SocketService.emit('logout',SocketService.id)
            
          
            
 	}
        
        
$rootScope.currentLang=function()
{
    return $translate.use();
    
}
  $rootScope.changeLanguage = function (key) {
       
    $translate.use(key);
  };
       
       
       
  
  }
  
  
  
  
  
  }

})();
