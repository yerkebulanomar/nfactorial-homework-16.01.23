// 1

// function checkAge(age) {
//     return (age > 18) ?  true : confirm('Родители разрешили?')
//   }

// console.log(checkAge(6));

// 2

// function pow(x, n) {
//     return x ** n;
// }

// let pow = function(x,n) {
//     return x **n;
// } 

// let pow = (x ,n) => {return x ** n};

// console.log(pow(3,4));

// 3

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => { alert("Вы согласились."); },
//     () => { alert("Вы отменили выполнение."); }
//   );

// 4

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a,b)=> b-a);

// alert( arr ); // 8, 5, 2, 1, -10

// 5

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];
// let names = users.map(item => item.name);

// alert( names ); // Вася, Петя, Маша

// 6

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(item => ({
//     fullName: `${item.name} ${item.surname}`,
//     id: item.id
//   }));

// // usersMapped = [
// //   { fullName: "Вася Пупкин", id: 1 },
// //   { fullName: "Петя Иванов", id: 2 },
// //   { fullName: "Маша Петрова", id: 3 }
// // ]

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

// 7

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

let getAverageAge = arr.map(item => item.age)

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// checking git functions in vscode