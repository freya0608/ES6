/**
 * Created by Administrator on 2017/3/3.
 */
'use strict';
function breakfast(dessert=':cake',drink=':tee') {
  return `${dessert} ${drink}`;
}
console.log(
    breakfast() //:cake :tee
    // breakfast('quan','jiu')//quan jiu
);