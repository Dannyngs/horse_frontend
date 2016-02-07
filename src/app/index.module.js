(function() {
  'use strict';

  angular
    .module('horseFrontend', ['ui.router', 'toastr','ipCookie','pascalprecht.translate'])



      .factory('chart',function($window){



  return {
       myBarChart:null,
      trainerChart:null,
      jockeyChart:null,
      horseWeihtChart:null,
      weihtChart:null,
      topChart:null,
      drawChart:null,
      veterinaryChart:null,
       drawTop:function(data){


           var ctx=[];
            ctx[0] = document.getElementById("top1").getContext("2d");
            ctx[1] = document.getElementById("top2").getContext("2d");
            ctx[2] = document.getElementById("top3").getContext("2d");

           var top1data =  [
	{
		value: (100-data[0].grade).toFixed(2),
		color:"rgba(220,220,220,0.2)",

        labelFontSize : '16'
	},
    {
		value: data[0].grade,
		color:"rgba(46, 204, 113,0.8)",

        labelFontSize : '16'
	}

  

];
           var top2data =  [
	{
		value: (100-data[1].grade).toFixed(2),
		color:"rgba(220,220,220,0.2)"
	},
    {
		value: data[1].grade,
		color:"rgba(241, 196, 15,0.8)"
	}

];
           var top3data =  [
	{
		value: (100-data[2].grade).toFixed(2),
		color:"rgba(220,220,220,0.2)"
	},
    {
		value: data[2].grade,
		color:"rgba(52, 152, 219,0.8)"
	}

];

            var options = {    animateRotate : false,animateScale : true,segmentShowStroke : false,datasetFill : false ,strokeColor: "rgba(2,2,2,1)"}

           if(!this.topChart){

        this.topChart=[];
        this.topChart[0]= new Chart(ctx[0]).Doughnut(top1data,options);
        this.topChart[1]= new Chart(ctx[1]).Doughnut(top2data,options);
        this.topChart[2]= new Chart(ctx[2]).Doughnut(top3data,options);


    }
           else{
               this.topChart[0].destroy();
                this.topChart[1].destroy();
               this.topChart[2].destroy();
        this.topChart[0]= new Chart(ctx[0]).Doughnut(top1data,options);
        this.topChart[1]= new Chart(ctx[1]).Doughnut(top2data,options);
        this.topChart[2]= new Chart(ctx[2]).Doughnut(top3data,options);
           }
       },


       drawBar:function(labels,dt){

           var ctx = document.getElementById("myChart").getContext("2d");
           var data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(39, 174, 96,0.6)",
            strokeColor: "rgba(39, 174, 96,1.0)",
            highlightFill: "rgba(39, 174, 96,0.9)",
            highlightStroke: "rgba(39, 174, 96,1.0)",
            data: dt
        }
    ]
};
            var options = { scaleFontColor: "#fff" }

           if(!this.myBarChart){


        this.myBarChart= new Chart(ctx).Bar(data,options);
                

    }
           else{
               this.myBarChart.destroy();
                this.myBarChart= new Chart(ctx).Bar(data,options);
           }

        },
       drawTrainer:function(data){
            var labels =[];
           for(var i=0;i<data.length;i++){
             // labels.push(data[i].trainer +"("+data[i].horse+")");
               labels.push(data[i].trainer);
           }
         var dt =[];
           for(var i=0;i<data.length;i++){
              dt.push(data[i].trainer_score);
           }



           var ctx = document.getElementById("trainer_score").getContext("2d");
           var data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(231, 76, 60,0.6)",
            strokeColor: "rgba(231, 76, 60,1.0)",
            highlightFill: "rgba(231, 76, 60,0.8)",
            highlightStroke: "rgba(231, 76, 60,1.0)",
            data: dt
        }
    ]
};
            var options = { scaleFontColor: "#fff",datasetFill : false ,strokeColor: "rgba(2,2,2,1)",}

           if(!this.trainerChart){


        this.trainerChart= new Chart(ctx).Line(data,options);

    }
           else{
               this.trainerChart.destroy();
                this.trainerChart= new Chart(ctx).Line(data,options);
           }
       },
        drawJockey:function(data){
            var labels =[];
           for(var i=0;i<data.length;i++){
               labels.push(data[i].jockey);
           }
         var dt =[];
           for(var i=0;i<data.length;i++){
              dt.push(data[i].jockey_score);
           }



           var ctx = document.getElementById("jockey_score").getContext("2d");
           var data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(142, 68, 173,0.6)",
            strokeColor: "rgba(142, 68, 173,1.0)",
             highlightFill: "rgba(142, 68, 173,0.8)",
            highlightStroke: "rgba(142, 68, 173,1.0)",
            data: dt
        }
    ]
};
            var options = { scaleFontColor: "#fff",datasetFill : false ,strokeColor: "rgba(2,2,2,1)",}

           if(!this.jockeyChart){


        this.jockeyChart= new Chart(ctx).Line(data,options);

    }
           else{
               this.jockeyChart.destroy();
                this.jockeyChart= new Chart(ctx).Line(data,options);
           }
       },
       drawHorseWeight:function(data){
            var labels =[];
           for(var i=0;i<data.length;i++){
               labels.push(data[i].horse);
           }
         var dt =[];
           for(var i=0;i<data.length;i++){
              dt.push(data[i].horse_weight);
           }



           var ctx = document.getElementById("horse_weight").getContext("2d");
           var data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(243, 156, 18,0.6)",
            strokeColor: "rgba(243, 156, 18,1.0)",
            highlightFill: "rgba(243, 156, 18,0.8)",
            highlightStroke: "rgba(243, 156, 18,1.0)",
            data: dt
        }
    ]
};
            var options = { scaleFontColor: "#fff",datasetFill : false ,strokeColor: "rgba(2,2,2,1)",}

           if(!this.horseWeihtChart){


        this.horseWeihtChart= new Chart(ctx).Bar(data,options);

    }
           else{
               this.horseWeihtChart.destroy();
                this.horseWeihtChart= new Chart(ctx).Bar(data,options);
           }
       },
      drawWeight:function(data){
            var labels =[];
           for(var i=0;i<data.length;i++){
               labels.push(data[i].horse);
           }
         var dt =[];
           for(var i=0;i<data.length;i++){
              dt.push(data[i].weight);
           }



           var ctx = document.getElementById("weight").getContext("2d");
           var data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(41, 128, 185,0.6)",
            strokeColor: "rgba(41, 128, 185,1.0)",
            highlightFill: "rgba(41, 128, 185,0.9)",
            highlightStroke: "rgba(41, 128, 185,1.0)",
            data: dt
        }
    ]
};
            var options = { scaleFontColor: "#fff",datasetFill : false ,strokeColor: "rgba(2,2,2,1)",}

           if(!this.weihtChart){


        this.weihtChart= new Chart(ctx).Bar(data,options);

    }
           else{
               this.weihtChart.destroy();
                this.weihtChart= new Chart(ctx).Bar(data,options);
           }
       },
       drawDraw:function(data){
            var labels =[];
           for(var i=0;i<data.length;i++){
               labels.push(data[i].horse);
           }
         var dt =[];
           for(var i=0;i<data.length;i++){
              dt.push(data[i].draw_placed||null);
           }


           var ctx = document.getElementById("draw").getContext("2d");
           var data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.6)",
            strokeColor: "rgba(220,220,220,1)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: dt
        }
    ]
};
            var options = { scaleFontColor: "#fff",datasetFill : false ,strokeColor: "rgba(2,2,2,1)",}

           if(!this.drawChart){


        this.drawChart= new Chart(ctx).Bar(data,options);

    }
           else{
               this.drawChart.destroy();
                this.drawChart= new Chart(ctx).Bar(data,options);
           }
       },
     drawVeterinary:function(data){




           var ctx = document.getElementById("veterinary").getContext("2d");
             var dt =  [
	{
		value: data[0].veterinary,
		color:"rgba(26, 188, 156,0.8)",
        label:data[0].horse
	},
    {
		value: data[1].veterinary,
		color:"rgba(231, 76, 60,0.8)",
        label:data[1].horse
	},
    {
		value: data[2].veterinary,
		color:"rgba(241, 196, 15,0.8)",
        label:data[2].horse
	}

];
            var options = { scaleFontColor: "#fff",datasetFill : false ,strokeColor: "rgba(2,2,2,1)",}

           if(!this.veterinaryChart){


        this.veterinaryChart= new Chart(ctx).Pie(dt,options);

    }
           else{
               this.veterinaryChart.destroy();
                this.veterinaryChart= new Chart(ctx).Pie(dt,options);
           }
  }







  }
  })
      .factory('SocketService',  function() {
      var socket = io.connect('http://ec2-54-169-239-145.ap-southeast-1.compute.amazonaws.com')


        socket.on("connection",function(){

            console.log('connected to the server')
        })

        return {
            emit:function(name,data){
                socket.emit(name,data)
            },
            loginok:function(callball){
                 socket.on('loginok',callball)
            },
            loginfailed:function(callball){
                socket.on('loginfailed',callball)
            },
            logoutok:function(callball){
                 socket.on('logoutok',callball)
            },
            logoutfailed:function(callball){
                socket.on('logoutfailed',callball)
            }


        };
	})
      .factory('UserService', ['$rootScope', 'ipCookie', function($rootScope, ipCookie) {



        return {

			get: function() {
				var user = $rootScope.current_user
                    return user
			},
			login: function(user) {
				console.log('*LOGGED IN ***')
                $rootScope.current_user=user
				ipCookie('current_user', user.username)


			},
			logout: function() {
				console.log('*LOGGED OUT ***')
               $rootScope.current_user=null
               ipCookie.remove('current_user')



			},
			isLoggedIn: function() {
                return $rootScope.current_user||false
			}
		}

	}])

})();
