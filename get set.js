/**
 * Created by Administrator on 2017/3/4.
 */
'use strict';
class Chef{
    constructor(food){
        this.food = food;
        this.dish=[];
    }
    get menu(){
        return this.dish;
    }
    set menu(dish){
         this.dish.push(dish);
    }
    cook(){
        console.log(this.food)
    }
}
let wanghao = new Chef();
console.log(wanghao.menu = 'tototo');//tototo
console.log(wanghao.menu = 'hshshhs');//hshshhs
console.log(wanghao.menu);//["tototo", "hshshhs"]