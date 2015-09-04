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
