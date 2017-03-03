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
let sunday = {
    __proto__:breakfast

};
console.log(sunday.getDrink());//cake
console.log(Object.getPrototypeOf(sunday)===breakfast);//true
sunday.__proto__ = dinner;
console.log(sunday.getDrink);//tee
console.log(Object.getPrototypeOf(sunday)===dinner);//true