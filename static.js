/**
 * Created by Administrator on 2017/3/4.
 */
//static不需要实例化类就可以使用的方法
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
   static cook(food){
        console.log(food);
    }
}
Chef.cook('tomato');//tomato





