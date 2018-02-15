/**
 * Filename: e:\LearnJS\ObjectCreatePractice.js
 * Path: e:\LearnJS
 * Created Date: Thursday, February 8th 2018, 11:10:39 am
 * Author: AliHusain Sorathiya
 * 
 * Copyright (c) 2018 Your Company
 */

 var Ahmed = new Object();
Ahmed.name = "Ahmed";
Ahmed.familyname = "Tapadhar";

console.log(Ahmed);

var Shakir = Object.create(Ahmed);
Shakir.name = "Shakir";
console.log(Shakir.name, Shakir.familyname);

var Tahir = Object.create(Ahmed);
Tahir.name = "Tahir";
console.log(Tahir.name, Tahir.familyname);

Tahir.__proto__.familyname = "Khan";
console.log(Ahmed.familyname);

console.log(Tahir.familyname);

console.log(Shakir.familyname);

var Aiman = new Object();
Aiman.name = "Aiman Kazi";
Aiman.CompanyName = "Visual Labs";
Aiman.office = "Classic Tower";
Aiman.homeaddress = "Dockyard";
console.log(Aiman);

var ali = Object.create(Aiman);
ali.name = "Ali Husain";
ali.address = "Dongri";
console.log(
  "Employee Details: ",
  ali.name,
  ali.address,
  ali.office,
  ali.CompanyName
);

var car = new Object();
car.Companyname = "B.M.W";
car.type = "Diesel";
car.speaker = "Dolby";
car.steering = "Automatic";

console.log(car);

var car2 = Object.create(car);
car2.name = "BMW 200";
console.log(car2);
console.log(car2, car2.CompanyName, car2.type, car2.speaker, car2.steering);
