
'use strict'

{

getPrimes : function(num) {
  
  var primeNum = [];
  
  var emptyArr = [];
  
 
  for (b = 1; b <= num; b++) {
    
    var prime  = true;
    
    for (i =2; i <b; i++) {
      
      if (b % i === 0) {
        
        prime = false;
      }
    }
      
    if (prime === true) {
        
      primeNum.push(b);
    }
    
  
  }
  if (num === 1) {
    
      primeNum = [];
  }
  
  if (num <= 0 || typeof(num) === 'string') {
    
    primeNum = 'invaid input';
  }
  
  return primeNum ;
}
}


