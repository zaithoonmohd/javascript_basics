/* Write a Program to Flatten a given n-dimensional array */

const flatten = (array) => {
  if(array.constructor != Array){
     return null
  }
	return array.reduce(function(memo, el) {
    var items = Array.isArray(el) ? flatten(el) : [el];
    return memo.concat(items);
  }, []);
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
