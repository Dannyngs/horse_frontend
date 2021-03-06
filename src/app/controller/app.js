(function() {
  'use strict';

  angular
    .module('horseFrontend')
    .controller('AppController', AppController);

  /** @ngInject */
  function AppController($scope, toastr,$http,chart,$translate) {
  
var url='http://racingprohk.ap-southeast-1.elasticbeanstalk.com/';
      
//var url='http://localhost/';

 
     //Get Race info
    $http({
  method: 'GET',
  url: url+'fetchRace/'
})
        .then(
        function successCallback(response) {
       $scope.raceLoadHidden=true;
    $scope.races=response.data;
        if($scope.races.length==0)
            $scope.raceNoData=true;
        else
            {
              
                $scope.raceSelect=true; 
            }
        
  }, 
        function errorCallback(response) {
    toastr.error('Error','Cannot connect to the server,please try it later')
  }
        );
      
 
       
      
      
      
  
      
      $scope.buttonText ='APP_SELECT_RACE';
      $scope.calc=function(){
    
    if(!$scope.selectedlink){toastr.error('Please Select a race first');return;}
     $scope.buttonText='APP_ANALYZING';
      $scope.isResultReady= true;
    
  $http({
  method: 'POST',
  url: url,
 data:{link:$scope.selectedlink,lang:$translate.use()}
}).then(function successCallback(response) {
        var horseList = response.data.hl; 
        $scope.raceinfo=response.data.ri;
           $scope.horseList =horseList;
            console.log(horseList)


           if(horseList.length==0)
           {toastr.error('Failed to get any data!')
           $scope.buttonText ='APP_NO_DATA';
            $scope.isResultReady= false;
           return;
           }
           
            $scope.buttonText ='APP_SELECT_RACE';
                  
           
           var horse_name =[];
           for(var i=0;i<horseList.length;i++){
              horse_name.push(horseList[i].horse);
           }
           var horse_no =[];
           for(var i=0;i<horseList.length;i++){
              horse_no.push(horseList[i].no);
           }
           
         var horse_grade =[];
           for(var i=0;i<horseList.length;i++){
              horse_grade.push(horseList[i].grade);
           }   
           
           chart.drawBar(horseList);
           chart.drawTrainer(horseList);
             chart.drawJockey(horseList);
           chart.drawHorseWeight(horseList);
          chart.drawWeight(horseList);
            chart.drawTop(horseList);
            chart.drawDraw(horseList);
            //chart.drawVeterinary(horseList);
          
          // $scope.$apply();

           
           
           
           
           
  }, function errorCallback(response) {
           $scope.buttonText ='Get Score';
    toastr.error('asdasd','asas')
  });
      
    
    
    
    
}

    
  }
})();
