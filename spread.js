/**
 * Created by Administrator on 2017/3/3.
 */
'use strict';
let fruits = ['苹果','香蕉'],
    foods=['蛋糕', ...fruits];
console.log(fruits); //["苹果", "香蕉"]
console.log(...fruits); //苹果 香蕉
console.log(foods); //["蛋糕", "苹果", "香蕉"]