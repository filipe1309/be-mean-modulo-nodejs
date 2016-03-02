'use strict';

// console
console.log('hello world');

// process
//console.log(process.env);
console.log(process.memoryUsage());
console.log(process.execPath); // path do node
console.log('This processor architecture is ' + process.arch); // Arquitetura do sistema
// setInterval(cb, ms)
//setInterval(() => console.log("My Interval"), 1000); // a cada 1 segundo retorna "My Interval"

// setTimeout(cb, ms)
// clearTimeout(t)
/*
var myTimeOut = setTimeout(() => {
  console.log('My TimeOut');
}, 6000);

clearTimeout(myTimeOut);
myTimeOut // não retorna nada
*/
