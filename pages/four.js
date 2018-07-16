'use strict';

/*
    *   数值扩展
    *   提供了二进制和八进制的数值的新写法：0b(0B)和0o(0O)来表示
    *
    *
    */

var a = 2;
console.log(a === 2);
var b = 8;
console.log(b === 8);

//使用Number转化为十进制
console.log(Number(2));
//Number.isFinite():是否是有限的,只能接受数值，不会转换
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(100));
console.log(Number.isFinite('foo'));
console.log(Number.isFinite('15'));
console.log(Number.isFinite(true));

//Number.isNaN():是否是NaN,如果参数不是NaN，就一定是false;
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(1000));
console.log(Number.isNaN('foo'));
console.log(Number.isNaN(true));

//与传统的isFinite()和isNaN()全局方法的区别是不会进行类型转换。
console.log(isFinite('15'));
console.log(isNaN('NaN'));

//Number.parseInt(),Number.parseFloat()作用和parseInt()和parseFloat()作用一样
console.log(Number.parseInt('100'));
console.log(parseInt('100'));
console.log(parseInt('12.34'));
console.log(Number.parseInt('12.2323#'));
console.log(Number.parseFloat('100.777'));
console.log(parseFloat('13453.999'));

//Nubmer.isInteger():是否是一个整数j,只识别数值，不识别其他类型的数据
console.log(Number.isInteger(1231.23));
console.log(Number.isInteger(1231));

//Number.EPSILON:极小量,一个可接受的误差范围
console.log(Number.EPSILON);
console.log(Number.EPSILON.toFixed(20));

//安全整数：Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//判断是否安全：Number.isSafeInteger(),只针对整数
console.log(Number.isSafeInteger('a'));
console.log(Number.isSafeInteger(234234));

//去除小数部分Math.trunc() 有类型转换
console.log(Math.trunc(1231.342));
console.log(Math.trunc('232.34'));

//判断一个数是否是帧数，负数，零,返回5种值
console.log(Math.sign(-5));
console.log(Math.sign(5));
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log(Math.sign(NaN));

//计算一个数的立方根，有类型转换
console.log(Math.cbrt(-1));
console.log(Math.cbrt(98));
console.log(Math.cbrt('hello'));

//32进制表示法:Math.clz32()前导有多少个零
console.log(Math.clz32(0));
console.log(Math.clz32(1 << 10));

//相乘的结果：Math.imul()
console.log(Math.imul(2, 4));
console.log(Math.imul(4, 4));
console.log(Math.imul(0x7fffffff, 0x7fffffff));

//单精度浮点数：Math.fround()
console.log(Math.fround(24.3242342342342342342));

//平方根:Math.hypot()所有参数的平方和的平方根，有类型转换
console.log(Math.hypot(2, 2, 2));

//返回x的对数值：Math.expm1(-1);
console.log(Math.expm1(-1));

//返回自然对数：Math.log1p(x);
console.log(Math.log1p(1));
console.log(Math.log1p(-1));
console.log(Math.log10(2));
console.log(Math.log2(23));
console.log(Math.sinh(1));
console.log(Math.pow(2, 2));