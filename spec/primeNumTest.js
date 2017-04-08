
'use strict'


var getPrime = new getPrimes ();

var prime = require('.../code/getPrimeNumbers.js');


describe("Create an Array of prime numbers ", function(){

	describe("Case for empty Array", function(){

		it("Should return an empty array for no prime numbers", function(){

			expect(prime.getPrimes(1).toEqual([]));
		});
	});

	describe("Case to check for prime within a range and return an array", function(){

		it ("should [ 1, 2, 3, 5 ] for an input of 5", function(){

			expect(prime.getPrimes(5).toEqual([ 1, 2, 3, 5 ]));
		});

		it ("should return [ 1, 2, 3, 5, 7 ] for an input of 10", function(){

			expect(prime.getPrimes(10).toEqual([ 1, 2, 3, 5, 7 ]));
		});

		it ("should return [ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ] for an input of 30", function(){

			expect(prime.getPrimes(30).toEqual([ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]));
		});

		it ("should return [ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
    for an input of 45", function(){

			expect(prime.getPrimes(45).toEqual([ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
   ));
		});

		it ("should return  [ 1, 2, 3, 5, 7, 11, 13, 17, 19 ] for an input of 20", function(){

			expect(prime.getPrimes(20).toEqual( [ 1, 2, 3, 5, 7, 11, 13, 17, 19 ]));
		});

		it ("should return [ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
    for an input of 23", function(){

			expect(prime.getPrimes(23).toEqual([ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
   ));
		});

		it ("should return [ 1, 2, 3, 5, 7, 11, 13 ] for an input of 14", function(){

			expect(prime.getPrimes(14).toEqual([ 1, 2, 3, 5, 7, 11, 13 ]));
		});
	});
    
    describe("Case to check for invalid input", function(){

    	it("should return `invalid input` for an input of -1", function(){

    		expect(prime.getPrimes(-1).toEqual('invalid input'));
    	});

    	it ("should return `invalid input` for an input of a `john`", function(){

    		expect(prime.getPrimes('john').toEqual('invalid input'));
    	});
    });



});