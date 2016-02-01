(function() {
  'use strict';

  angular
    .module('horseFrontend')
    .controller('AppController', AppController);

  /** @ngInject */
  function AppController($scope, toastr,$http,chart) {
  
var url='http://horseback-dev.ap-southeast-1.elasticbeanstalk.com/';

 
     
    $http({
  method: 'GET',
  url: url+'fetchRace/'
}).then(function successCallback(response) {
       $scope.raceLoadHidden=true;
    $scope.races=response.data;
        if($scope.races.length==0)
            $scope.raceNoData=true;
        else
            {
              
                $scope.raceSelect=true; 
            }
        
  }, function errorCallback(response) {
    toastr.error('Error','Cannot connect to the server,please try it later')
  });
      
 
       
      
      
      
  
      
      $scope.buttonText ='Please select a race';
      $scope.calc=function(){
    
    if(!$scope.selectedlink){toastr.error('Please Select a race first','Error');return;}
     $scope.buttonText='Analyzing ...';
      $scope.isResultReady= true;
    
       $http({
  method: 'POST',
  url: url,
 data:{link:$scope.selectedlink}
}).then(function successCallback(response) {
        var horseList = response.data.hl; 
        $scope.raceinfo=response.data.ri;
           $scope.horseList =horseList;
            console.log(horseList)


           if(horseList.length==0)
           {toastr.error('Failed to get score,try agian please!')
           $scope.buttonText ='Sorry ! Could not get any data, please try again.';
            console.log('nothing')
           return;
           }
           
            $scope.buttonText ='Please select a race';
                  
           
           var horse_name =[];
           for(var i=0;i<horseList.length;i++){
              horse_name.push(horseList[i].horse);
           }
         var horse_grade =[];
           for(var i=0;i<horseList.length;i++){
              horse_grade.push(horseList[i].grade);
           }   
           
           chart.drawBar(horse_name,horse_grade);
           chart.drawTrainer(horseList);
             chart.drawJockey(horseList);
           chart.drawHorseWeight(horseList);
          chart.drawWeight(horseList);
            chart.drawTop(horseList);
            chart.drawDraw(horseList);
            chart.drawVeterinary(horseList);
          
          // $scope.$apply();

           
           
           
           
           
  }, function errorCallback(response) {
           $scope.buttonText ='Get Score';
    toastr.error('asdasd','asas')
  });
      
    
    
    
    
}

    
  }
})();
