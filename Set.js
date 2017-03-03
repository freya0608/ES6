/**
 * Created by Administrator on 2017/3/4.
 */
//Set不能包含重复的东西
let dessert = new Set('hsjhjdhj');
dessert.add('999');
console.log(dessert);
console.log(dessert.size);
console.log(dessert.has('999'));//true
dessert.delete('hs');
dessert.forEach(dessert=>{
    console.log(dessert);
});
dessert.clear();//空白
