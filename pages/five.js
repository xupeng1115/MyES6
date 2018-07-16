'use strict';

/*
    *   reg:扩展
    *   
    * 
    * 
    */

//原有模式
var reg1 = new RegExp('xyz', 'i');
var reg2 = /xyz/i;
var reg3 = new RegExp(/xyz/i);

//扩展
var reg4 = new RegExp(/abc/ig);
console.log(reg4.flags);
var reg5 = new RegExp(/abc/ig, 'i');
var str = 'xyzxyzxyz';
console.log(reg5.flags);
console.log(str.match(reg3));
console.log(str.replace(reg3, 'zyx'));
console.log(str.search(reg3));
console.log(str.split(reg3, '*'));

//添加u修饰符,码点大于oxffff的字符必须加u
console.log(/^(?:\uD83D(?![\uDC00-\uDFFF]))/.test('\uD83D\uDC2A'));
console.log(/^\uD83D/.test('\uD83D\uDC2A'));

//y修饰符是粘连修复符，用法和g类似，但是必须粘连匹配

//字符串必须转义才可以作为正则模式
// var str='/abcxyz/i';
// var reg6=RegExp.escape(str);
// console.log(reg6);

//s修饰符
// console.log(/foo.bar/s.test('foo\nbar'));