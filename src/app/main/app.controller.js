(function() {
  'use strict';

  angular
    .module('horseFrontend')
    .controller('AppController', AppController);

  /** @ngInject */
  function AppController($scope, toastr,$http,chart) {
  


 
     
    $http({
  method: 'GET',
  url: 'http://horseback-dev.ap-southeast-1.elasticbeanstalk.com/fetchRace'
}).then(function successCallback(response) {
       $scope.isready=true;  
     $scope.races=response.data;
  }, function errorCallback(response) {
    toastr.error('Error','Cannot connect to the server,please try it later')
  });
      
 
       
      
      
      
  
      
      $scope.buttonText ='Get Score';
$scope.calc=function(){
    
    if(!$scope.selectedlink){toastr.error('Please Select a race first','Error');return;}
     $scope.buttonText='Calculating.....';
      $scope.isResultReady= true;
    
       $http({
  method: 'POST',
  url: 'http://horseback-dev.ap-southeast-1.elasticbeanstalk.com/',
 data:{link:$scope.selectedlink}
}).then(function successCallback(response) {
         console.log(response.data)
        $scope.buttonText ='Get Score';
         $scope.horseList = response.data;       
            console.log(response.data.length)

           if(response.data.length==0)
           {toastr.error('Failed to get score,try agian please!')
           $scope.buttonText ='Get Score';
            console.log('nothing')
            return;
           }
          
           var horse_name =[];
           for(var i=0;i<response.data.length;i++){
              horse_name.push(response.data[i].horse);
           }
         var horse_grade =[];
           for(var i=0;i<response.data.length;i++){
              horse_grade.push(response.data[i].grade);
           }   
           
           chart.drawBar(horse_name,horse_grade);
           chart.drawTrainer(response.data);
             chart.drawJockey(response.data);
           chart.drawHorseWeight(response.data);
          chart.drawWeight(response.data);
            chart.drawTop(response.data);
            chart.drawDraw(response.data);
            chart.drawVeterinary(response.data);
      
           

           
           
           
           
           
  }, function errorCallback(response) {
           $scope.buttonText ='Get Score';
    toastr.error('asdasd','asas')
  });
      
    
    
    
    
}

    
  }
})();
