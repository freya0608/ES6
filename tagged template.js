/**
 * Created by freya on 2017/3/3.
 */
'use strict';
let dessert = '蛋糕', drink = '茶';
let breakfast = kitchen`今天的早餐是${dessert}与 ${drink}`;
function kitchen(strings, ...values) {
    console.log(strings);
    console.log(values);
    let result ='';
    for(var i=0;i<values.length;i++){
        result += strings[i];
        result +=values[i];
    }
    result +=strings[strings.length-1];
    return result;
}
console.log(breakfast);