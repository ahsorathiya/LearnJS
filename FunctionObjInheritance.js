/**
 * Filename: e:\LearnJS\FunctionObjInheritance.js
 * Path: e:\LearnJS
 * Created Date: Thursday, February 8th 2018, 1:23:04 pm
 * Author: AliHusain Sorathiya
 * 
 * Copyright (c) 2018 Your Company
 */


function Emp (id,name) {
    this.id=id;
    this.name= name;
    this.print=function () {
    console.log("Inside Print fn");
    };
}
function Manager (id,name,designation) {
    Emp.call(this,id,name);
    GenerateCountry.call(this);
    this.designation=designation;
}

function GenerateCountry () {
    this.country="India";
}



var Ali = new Manager(2,"Ali","Employee");
var Aiman = new Manager(1,"Aiman","Manager");
console.log(Aiman);




function salary (id,name,designation,salary) {
    Manager.call(this,id,name,designation);
    this.salary="25000";
}

var ash = new salary(2,"Ali","Employee");
console.log(ash);