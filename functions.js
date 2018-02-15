/**
 * Filename: e:\LearnJS\functions.js
 * Path: e:\LearnJS
 * Created Date: Tuesday, February 6th 2018, 4:26:57 pm
 * Author: AliHusain Sorathiya
 * 
 * Copyright (c) 2018 Your Company
 */

function add(a, b) {
  var c = a + b;
  return c;
}
var result = add(5, 10);
console.log("addition:", result);

function sub(a, b) {
  var c = a - b;
  return c;
}
var result = sub(10, 5);
console.log("subtraction:", result);

function mul(a, b) {
  var c = a * b;
  return c;
}
var result = mul(10, 5);
console.log("multiply:", result);

function div(a, b) {
  var c = a / b;
  return c;
  // body
}
var result = div(10, 5);
console.log("Divide:", result);

function mod(a, b) {
  var c = a % b;
  return c;
}
var result = mod(10, 5);
console.log("Modulus:", result);

console.log(add.toString());
var add=99;

console.log(add.toString());
