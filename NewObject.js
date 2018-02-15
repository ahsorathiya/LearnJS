/**
 * Filename: e:\LearnJS\NewObject.js
 * Path: e:\LearnJS
 * Created Date: Wednesday, February 7th 2018, 12:23:04 pm
 * Author: AliHusain Sorathiya
 * 
 * Copyright (c) 2018 Your Company
 */

var person = new Object({});
person.id = 1;
person.name = "AsH";
person.print = function() {
  console.log("Hello " + person.name);
};

console.log(person);
console.log(person.id);

console.log(person.name);

console.log(person["print"]); //another way to print function.

//Both have different outputs below
//eg :1
console.log("T"+20+20);
// O/P: T2020


//eg:2
console.log(20+20+"T");
// O/P: 40T


//Reason for different outputs: Parsing happens from Left to Right always.