/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (n) => {
    if(n<=0){return null}

    var outp = '';
    for (let i = 0; i < n; i++) {
      for (let j =0; j < n - i; j++) outp += ' ';
        for (let k = 0; k <= i; k++) outp += '* ';
          outp += " \n"  
    } 
    return outp;
};
//buildPyramid(5);

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/
module.exports = buildPyramid;
