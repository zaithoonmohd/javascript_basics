// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
var studDet=[
    {name:"a",subjects:['G','A'],score:[80,90]},
    {name:"b",subjects:['G','A'],score:[81,91]},
    {name:"c",subjects:['G','A'],score:[82,92]},
    {name:"d",subjects:['G','P'],score:[83,93]},
    {name:"e",subjects:['G','P'],score:[84,94]},
    {name:"f",subjects:['G','P'],score:[85,95]}
];

const card=(array)=>{
             array.reduce((obj,item)=>{
               item.percentage=(item.score[0]+item.score[1])/2;
               console.log(item.name+"\t"+item.percentage+"%");
              },{});
            };
card(studDet);