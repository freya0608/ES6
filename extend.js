/**
 * Created by Administrator on 2017/3/4.
 */
'use strict';
class Person{
    constructor(name,birthday){
        this.name = name;
        this.birthday = birthday;
    }
    intro(){
        return `${this.name},${this.birthday}`;
    }
}
class Chef extends Person{
    constructor(name,birthday){
        super(name,birthday);
    }
}
let wanghao = new Chef('wanghao','1984-02-02');
console.log(wanghao.intro());//wanghao,1984-02-02

