/**
 * Created by Administrator on 2017/3/3.
 */
'use strict';
let breakfast = {
    getDrink(){
        return 'cake';
    }
};
let dinner = {
    getDrink(){
        return 'tee';
    }
};
let sunday  = Object.create(breakfast);
console.log(sunday.getDrink());//cake
console.log(Object.getPrototypeOf(sunday) === breakfast); //true

Object.setPrototypeOf(sunday,dinner);
console.log(sunday.getDrink());//tee
console.log(Object.getPrototypeOf(sunday)===dinner); //true