var main = require("../src/main.js"),
    Immutable = require('immutable');

describe("The sieve of Eratosthenes", function(){
  var sieve = main.sieve,
      primes = null;

  beforeAll(function(){
    primes = sieve();
  });

  it("should start at 2", function(){
    expect(primes.get(0)).toBe(2);
  });

  it("should have the correct first 10 primes", function(){
    expect(primes.take(10).toJS()).toEqual([2,3,5,7,11,13,17,19,23,29]);
  });

  it("should have the correct primes at 9990", function(){
    expect(primes.skip(9990).take(10).toJS()).toEqual([104677, 104681, 104683, 104693, 104701,
						       104707, 104711, 104717, 104723, 104729]);
  });
});

describe("The Multiplication Table", function(){
  var mt = main.multiplicationTable;

  it("should be empty with null or undefined or emptyList", function(){
    expect(mt().toJS()).toEqual([])
    expect(mt(null).toJS()).toEqual([])
    expect(mt(Immutable.List()).toJS()).toEqual([])
  });

  it("should have the correct values for [1, 3, 7, 13]", function(){
    var List = Immutable.List,
	input = List([1,3,7,13]),
	output = List([List([1, 3, 7, 13]),
		       List([3, 9, 21, 39]),
		       List([7, 21, 49, 91]),
		       List([13, 39, 91, 169])])
    expect(mt(input)).toEqual(output);
  })
});
