/**
 * Filename: e:\LearnJS\ObjectCreate.js
 * Path: e:\LearnJS
 * Created Date: Wednesday, February 7th 2018, 1:19:38 pm
 * Author: AliHusain Sorathiya
 * 
 * Copyright (c) 2018 Your Company
 */


var Amitabh = new Object();

    Amitabh.name="Amitabh";
    Amitabh.familyname="Bachchan";
    console.log(Amitabh);
// Concept: Prototypical Inheritance
var Abhishekh = Object.create(Amitabh); // created the object abhishek which will inherit the prop of Amitabh
console.log(Abhishekh.name);  // will look into the parent 
Abhishekh.name="Abhishekh";
console.log(Abhishekh.name +" "+ Abhishekh.familyname);

var shweta = Object.create(Amitabh); // Creating obj shweta which is a child of Amitabh.
shweta.name="Shweta";
shweta.familyname="Nanda";  //setting custom value.
console.log(shweta);
shweta.__proto__.familyname="Shrivastav"; // changing the property of parent.
// changing the surname of Parent (Amitabh) via Shweta (child)
console.log(Amitabh);
console.log(Amitabh.familyname);
console.log(Abhishekh.familyname);

Abhishekh.__proto__.familyname="Tapadhar";
console.log(Amitabh);
console.log(Abhishekh,Abhishekh.familyname);
console.log(shweta);


