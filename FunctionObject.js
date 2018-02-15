/**
 * Filename: e:\LearnJS\FunctionObject.js
 * Path: e:\LearnJS
 * Created Date: Thursday, February 8th 2018, 12:43:39 pm
 * Author: AliHusain Sorathiya
 * 
 * Copyright (c) 2018 Your Company
 */

    function Emp (id,name) {
        this.id=id;
        this.name= name;
        console.log(id,name);
        this.print=function () {
     return 10;
        };
   
    
    }
    var result = Emp(1,"Ali");  // Calling the fn and storing it i n variable result
console.log(result);

//     var result2 = new Emp(1,"Ali");
//     console.log(result2);
//      // console.log(Emp(print()));

Emp("Ali");

// var a = result2.print();
// console.log(a);