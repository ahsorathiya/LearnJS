/**
 * Filename: e:\LearnJS\VarLet.js
 * Path: e:\LearnJS
 * Created Date: Wednesday, February 14th 2018, 10:11:46 am
 * Author: AliHusain Sorathiya
 * 
 * Copyright (c) 2018 VLIT Company
 */


//understanding difference b/w null and undefined.
//1.null    //null!=0;
var a=null;
console.log(a);

//2. Undefined
var b;
console.log(b);

// supports $ 
var $name = "AsH";
console.log($name);
// op: ASH

// Tricky question 1:
var a=null;
console.log(a+10);
//displays 10.




// Tricky question 1:
//if variable is null: it is false inside the if statement;
// if the variable has some value : eg a = 5; then the control will go inside the if statement.
var a = 5;
if (a) // checks if it is null. if it is null the control will not go to if statement.
 {
    console.log("inside if statement");
}



function greetMe (name) {
    console.log("Hello "+ name);
    var test = 5;
    console.log("The value of test is: "+ test);
}

greetMe("ASH");


//directly assigning the value of if statement as true.
if (true) {
    // let is always bound to a scope. 
    //its life is from the moment if is created till if statements ends.
    let x = 5; 
    console.log("the value of x inside 1st if is: " + x);
}


if (true) {
    // However,
    // the var keyword has its scope inside a function only.
    // +++----+++ BUT : if the var keyword is defined anywhere outside
    // the function [even if its a loop, if statement, anything ] 
    // the scope of var will be entire in the program.
    var x = 50; 
    console.log("the value of x inside 2nd if is: " + x);
}
console.log("the value of x is:" +x);