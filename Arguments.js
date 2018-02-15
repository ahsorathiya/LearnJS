/**
 * Filename: e:\LearnJS\Arguments.js
 * Path: e:\LearnJS
 * Created Date: Wednesday, February 14th 2018, 11:44:15 am
 * Author: AliHusain Sorathiya
 * 
 * Copyright (c) 2018 Visual Labs
 */

 function NeverEnding () {
for (let index = 0; index < arguments.length; index++) {
    // const element = array[index];
console.log(arguments[index]);    
}
 }


 NeverEnding(1,2,3,4,5,6,7,8,8,9);
 