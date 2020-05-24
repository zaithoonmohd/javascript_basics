// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast

var fruits = [{name:"apple", color:"red", pricePerKg:"80"},{name:"orange", color:"orange", pricePerKg:"60"},{name:"banana", color:"yellow", pricePerKg:"50"}];

// Write your code here
const convert= (array,keyVal) =>
    array.reduce((obj, item) => {
      let itemTemp=JSON.parse(JSON.stringify(item));
      delete itemTemp[keyVal]
      obj[item[keyVal]] = itemTemp
      return obj
    }, {})


const retrive=(fruitName)=>{
    const dataModel=convert(fruits,"name");
    return dataModel[fruitName]
}

console.log(retrive("apple"));
