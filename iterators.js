/**
 * Created by Administrator on 2017/3/3.
 */
'use strict';
function chef(foods) {
    let i=0;
    return{
        next(){
            let done=(i>=foods.length);
            let value =! done? foods[i++]:undefined;
            return{
               value:value,
                done:done
            }
        }
    }
}
let wanghao = chef(['xihongshi','hhh']);
console.log(wanghao.next());//false
console.log(wanghao.next());//
console.log(wanghao.next());
// Object {value: "xihongshi", done: false}
//  Object {value: "hhh", done: false}
//  Object {value: undefined, done: true}