/**
 * Created by freya on 2017/3/3.
 */
'use strict';
function breakfast(dessert,drink, ...foods) {
    console.log(dessert,drink,...foods);//cake tee apple pear
}
//其余参数都放在foods参数中;
breakfast('cake','tee','apple','pear');
