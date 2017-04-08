'use strict'

module.exports = {


aritGeo : function (arr) {

  var emptyArr = [];
  
  var ariArr = arr.map(Math.abs);
  
  var newArr = ariArr.sort(function(a,b){
    return a-b;
  });
  
  
  var ratio = newArr[1] /newArr[0];
  
  var diff = newArr[1] - newArr[0];
  
  
   if (arr.length === 0) {
      
      return 0;
      
    }
  
  for (var i=1, j=2; j <newArr.length; i++, j++) {
    
     if (newArr[j+1] /newArr[i+1] == ratio) {
      
      return "Geometric";
    }
  
    
    else if (newArr[j+1] -newArr[i+1] == diff ) {
      
      return "Arithmetic";
    }
    
    else if (newArr[j+1]/newArr[i+1] !== ratio && newArr[j+1] - newArr[i+1] !== diff){
   
    return -1;
    
    }
  return ratio;
}

}
}









