/* Write a Program to convert an array of objects to an object
	based on a given key */

  const convert= (array,keyVal) => {
      if(array.constructor != Array){
        return null
      }
      return array.reduce((obj, item) => {
        obj[item[keyVal]] = item
        return obj
      }, {});
  }
  const peopleObject = convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}],"id")
  //console.log(peopleObject);
  
/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
