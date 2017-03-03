/**
 * Created by freya on 2017/3/4.
 */
    'use strict';
class Chef{
    constructor(food){
        this.food = food;
    }
    cook(){
        console.log(this.food)
    }
}
let wanghao = new Chef('tomato');
wanghao.cook();//tomato