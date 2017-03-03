/**
 * Created by Administrator on 2017/3/4.
 */
'use strict';
let food = new Map();
let fruit ={},cook = function () {},dessert='甜点';
food.set(fruit,'apple');
//food.set(cook,'knife');
console.log(food);//Map(1) {Object {} => "apple"}
//Map(2) {Object {} => "apple", function => "knife"}
console.log(food.get(fruit));//apple
console.log(food.get(cook));//knife
food.delete(dessert)
console.log(food.has(dessert));



















