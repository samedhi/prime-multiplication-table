var Immutable = require('immutable');


/*
 * This returns a infinite lazy sequence of primes.
 * 
 * Advantages are that it can run forever as long as you don't hold onto the head of 
 * the sequence. This is due to the fact that it effectively always uses a constant 
 * amount of memory. Of course, eventually, the time between it finding primes is so 
 * high that this is kind of irrelevant. Also, ultimately, we are limited as well by the
 * Maximum size an integer can be, which I believe is 2^64 in JS. 
 *
 * Other advantage is that it is a lazy sequence, which I always think is nice.
 * 
 * If you do hold onto the head, like the unbounded Sieve of Eratosthenes created 
 * by (functionally) wrapping additional filters around the sequence or (procedurally)
 * keeping a dictionary of composites, you will eventually run out of memory.
 */
var integers = Immutable.Range(2, Infinity);

function sieve(){
  return integers.filter(function(v){
    var sqrt  = Math.sqrt(v), 
	// ints seem to run faster
	floor = Math.floor(sqrt), 
	// Only need to check values less than sqrt of N
	check = integers.takeWhile(function(v){ return v <= floor; });
    
    // Is it not composite? then it is prime!
    return !check.some(function(c){ return (v % c) == 0});
  });
}

/*
 * A multiplication table of `integers x `integers as a vector of vectors. Where
 * the outermost vector contains the row vectors and the row vectors contain
 * the row values.
 *
 * Takes a Seq (Immutable.js) as `integers argument.
 */
function multiplicationTable(integers){
  var integers = integers || Immutable.List();
  return integers.map(function(x){
    return integers.map(function(y){ return x * y;}).toList();
  }).toList();
}

module.exports = {sieve: sieve,
		  multiplicationTable: multiplicationTable}
