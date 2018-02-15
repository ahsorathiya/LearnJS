/**
 * Filename: e:\LearnJS\prac.js
 * Path: e:\LearnJS
 * Created Date: Monday, February 12th 2018, 11:55:53 am
 * Author: AliHusain Sorathiya
 * 
 * Copyright (c) 2018 Your Company
 */

function mhsscoe () {
College="M.H.S.S.C.O.E";
Address="Byculla, Mumbai-8";

}

function HOD (name, Branch, salary){
this.name=name;
this.Branch=Branch;
this.salary=salary;
mhsscoe.call(this);
}

function teacher (name,Branch,salary,mhsscoe) {
HOD.call(this, name , Branch,salary);
mhsscoe.call(this);
}

var sanam = new teacher("sanam","IT",58000);
console.log(sanam);