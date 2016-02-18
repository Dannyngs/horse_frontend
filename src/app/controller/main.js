(function() {
  'use strict';

  angular
    .module('horseFrontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,$timeout, toastr,$http) {
  
     
     // $('#days').redrawKnob();
    // $('#hours').redrawKnob();
    // $('#mins').redrawKnob();
    
$('#days').knob({
     skin:"tron",
    'min':1,
    'max':31,
    'thickness':.1,
    'height':140,
    'width':140,
    'readonly':'true',
   "fgColor":"#bb141a",
           
    'inputColor':"#fff"
    
});
 $('#hours').knob({
     skin:"tron",
    'min':0,
    'max':23,
    'thickness':.1,
    'height':140,
    'width':140,
    'readonly':'true',
   "fgColor":"#bb141a",
           
    'inputColor':"#fff"
    
});
      $('#mins').knob({
     skin:"tron",
    'min':0,
    'max':59,
    'thickness':.1,
    'height':140,
    'width':140,
    'readonly':'true',
   "fgColor":"#bb141a",
           
    'inputColor':"#fff"
    
});
      $('#secs').knob({
     skin:"tron",
    'min':0,
    'max':59,
    'thickness':.1,
    'height':140,
    'width':140,
    'readonly':'true',
   "fgColor":"#bb141a",
           
    'inputColor':"#fff"
    
});
  }
        
})();
