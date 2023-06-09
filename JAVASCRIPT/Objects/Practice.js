// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// function isEmpty(obj){
//     for(let key in obj){
//         return false;
//     }
//     return true;
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;

// for(let key in salaries){
//     sum = sum + salaries[key];
// }

// console.log(sum);

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);

  function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof(obj[key])==Number){
            obj[key] = 2*obj[key];
        }
    }
  }
  
  // after the call
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };