/*
    Khai báo biến ( var - let - constant )
*/
// ES6
// --------------- LET ---------------
let username = "Man Ng";

username = "Cybersoft";
// => giải quyết đc vấn đề về hositing
// => không đc khai báo lại 1 biến đã khai báo trc đó rồi
// => có thế gán giá trị đã khai báo trc đó = 1 giá trị mới

// --------------- CONSTANT ---------------
const fullName = "Cybersoft";

// fullName = "FPT Software";

// console.log(fullName);
// => giải quyết đc vấn đề về hositing
// => không đc khai báo lại 1 biến đã khai báo trc đó rồi
// => không gán giá trị khi đã khai báo biến constannt trước đó
// => thường đc sử dụng để khai báo 1 giá trị mặc định ko thay đổi hoặc là 1 hằng số

// --------------- EXAMPLE ---------------

function demoVariable() {
  let total = 0;

  total = 50;

  return total;
}

// ======================================================

/*  
    PHẠM VI KHAI BÁO BIẾN
*/
// --------------- GLOBAL SCOPE ---------------
const globalScope = "Global Scope";

// --------------- LOCAL SCOPE ( FUNCTION, BLOCK, LEXICAL ) ---------------
// * FUNCTION SCOPE

function main() {
  var functionScope = "Function Scope";
}

// console.log(functionScope);
// => Những biến khai báo trong function chỉ đc sử dụng nội bộ trong function đó, bên ngoài ko dùng đc

// * BLOCK SCOPE

function main1() {
  const x = 10;

  if (true) {
    const x = 20;

    console.log(x);
  }

  console.log(x);
}

main1();

// => block scope chỉ hiệu nghiệm với let và const , var sẽ ko hoạt động
// * LEXICAL SCOPE

function main2() {
  const y = 50;

  function main3() {
    console.log(y);
  }
}

main2();

// => biến y đang nằm trong phạm vi lexical scope của main3 function và trong function main3 có thể xử dụng nó.

// ES5
// console.log(username); // null - undefined - throw error

// var username = "Hello Cybersoft";

// Trình biên dịch JS
// var username; // hoisting

// console.log(username);

// username = "Hello Cybersoft";

// function main() {
//     // function scope
//     var count = 5;

//     if (true) {
//       // block scope
//       var count = 20;

//       console.log(count);
//     }

//     console.log(count);
//   }

//   console.log(count);

//   main();
