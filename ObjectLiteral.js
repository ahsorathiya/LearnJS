/**
 * Filename: e:\LearnJS\ObjectLiteral.js
 * Path: e:\LearnJS
 * Created Date: Monday, February 5th 2018, 12:32:31 pm
 * Author: AliHusain Sorathiya
 * 
 * Copyright (c) 2018 Your Company
 */


var person = {
  id: 1,
  name: "Aiman",
  loyal: true,
  id: 5
  //overwrite of ID. alt shft n for output
};
var car = {
  name: "BMW",
  model: 2018,
  price: 2000000,
  color: "Red",
  gaadi_number: "MH01CF1893",
  car_type: "petrol",
  print:function () {
    console.log("Hello world");
  }
  //keys have to be unique
};
console.log(person["id"], car.name);
//another way to print id.

console.log(car); // print all key:value pairs in car

console.log(car.print.toString());

//asdasdasdsd

//object has a state and have behaviours.