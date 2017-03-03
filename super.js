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
    __proto__:breakfast,
    getDrink(){
        return super.getDrink() +'milk';//覆盖掉getDrink,重新定义；
    }
};
console.log(sunday.getDrink());// cake milk
