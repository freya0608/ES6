/**
 * Created by Administrator on 2017/3/3.
 */
//生成迭代器
// 'use strict';
// function* chef() {
//     yield 'tomato';
//     yield 'egg';
// }
// let wanghao = chef();//wanghao就是迭代器
// console.log(wanghao.next());
// console.log(wanghao.next());
// console.log(wanghao.next());



// Object {value: "tomato", done: false}
//  Object {value: "egg", done: false}
// Object {value: undefined, done: true}








'use strict';
let chef = function* chef(foods) {
    for(var i=0;i<foods.length;i++){
        yield foods[i];
    }
};
let wanghao = chef('cake','egg');//wanghao就是迭代器
console.log(wanghao.next());
console.log(wanghao.next());
console.log(wanghao.next());

// Object {value: "c", done: false}
// Object {value: "a", done: false}
// Object {value: "k", done: false}