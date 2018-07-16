'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function log(msg) {
    return console.log(msg);
}

/*
*   let 命令
*   用来声明变量，只在let命令所在的代码快内有效。  
*   let为js添加了块级作用域
*   let作用域代替了立即执行函数
*   可以在块级作用域中定义函数,ES5不允许定义函数，严格模式报错；在ES6中，函数行为类似let定义的变量，不允许在作用域外调用
*   
*/

{
    var _a = 10;
    var b = 1;
}

// log(a);
console.log(b);

for (var _i = 0; _i < 10; _i++) {}

console.log(i);

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}

a[6]();
var a = [];

var _loop = function _loop(_i2) {
    a[_i2] = function () {
        console.log(_i2);
    };
};

for (var _i2 = 0; _i2 < 10; _i2++) {
    _loop(_i2);
}

a[6]();

//for循环设置循环变量的地方是一个父作用域，循环体内部是一个单独的子作用域；
for (var _i3 = 0; _i3 < 3; _i3++) {
    var _i4 = 'abc';
    console.log(_i4); //循环体自己也有作用域
}

//let不存在变量提升,let声明的变量一定要在声明后使用，否则报错
// console.log(b);
// let b=2;

//暂时性死区：只要块级作用域内有let声明的变量，就绑定了这个区域，不受外部影响。

// var tmp=1;
// if(true){
//     tmp=2;
//     let tmp;
// }

//typeof 不在安全
typeof y === 'undefined' ? 'undefined' : _typeof(y);
// typeof x;    //报错
var x = void 0;

//隐蔽的死区
function get() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : y;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    return [x, y];
}

// get();
// xx=yy;
// yy=2;
function bar() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

    return [x, y];
}
bar();

// var xx=xx;
// console.log(xx);
// let xx=xx;

//不允许重复声明
var bb = 1;
// let bb=2;
//不能在函数里重复声明变量
// function ggg(arg){
//     let arg=0;
// }
// ggg(0);      //报错

function kkk(arg) {
    {
        var _arg = 0;
    }
}

kkk(0);

//块级作用域
var oDate = new Date();
function myDate() {
    console.log(oDate);
    if (false) {
        //变量提升到if块外面，但是没有赋值
        var oDate = 'hhh';
    }
}

myDate();

//泄露为全局变量
var s = 'hello';
for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}
console.log(i);

function ddd() {
    var a = 0;
    if (true) {
        var _a2 = 10;
    }
    console.log(a);
};

ddd();

//作用域嵌套:外层作用域无法访问到内层作用域
{
    {
        {
            var o = 100;
            {
                //内层作用域可以重新定义外层作用域同名变量；
                var _o = 10;
            }
            // console.log(o);
        }
    }
};

//立即执行函数
(function () {
    var temp = 10;
})();

//块级作用域;
{
    var temp = 10;
}

//在函数内部没有定义的变量，在函数调用后会变为全局变量，
// console.log(aaaa);

(function () {
    function get() {
        //当调用函数后才会将aaaa注册为全局作用域；
        aaaa = 10;
        console.log(aaaa);
    }
    get();
    console.log(aaaa);
})();

console.log(aaaa);

//作用域块中定义函数,不报错
if (true) {
    var _gettttt = function _gettttt() {
        console.log(1211);
    };

    _gettttt();
}

gettttt();

/*
*   浏览器规则：
*   允许在块级作用域中声明函数
*   函数声明类似于var,会提升到作用域的头部和函数所在的块级作用域的头部
*   必须有大括号
*   浏览器实现有差异，所以应避免在块级作用域中定义函数，尽量使用表达式定义函数。
*/
//在代码块中定义函数
// function fff(){console.log("I am  outside")};
(function () {
    //函数声明提升到函数作用域的头部
    if (true) {
        var _fff = function _fff() {
            console.log("I am inside");
        };

        //声明提升到块级作用域头部
        console.log(_fff);
        ;
    }
    console.log(fff);
    // fff();
})();

{
    var _ggg = function _ggg() {
        console.log(1);
    };

    var _a3 = 10;
    console.log(_ggg);
}

{
    var _a4 = 10;
    console.log(h); //会声明提升
    var h = function h() {
        console.log(1);
    };
}

{
    var _b = 1000;
    // console.log(c);         //不会声明提升
    var c = function c() {
        console.log(ggg);
    };
}

function get() {
    console.log(3233);
}

/*
*   const：
*   定义一个常量，并且不可改变，定义和初始化要同时做。
*   和let一样，只在块级作用域中有用，不会有声明提升，有暂时性死区,不可重复声明;
*   const可以声明一个对象数据，只保存对象的地址，不保存对象的具体元素数据,如果想不改变对象内的数据，可以使用Object.freeze()方法。
*   ES6有6中声明变量的方式：var、let、const、import、class、function.
*/
var Y = 10;
// const U;

{
    // console.log(Z);      //报错
    var _Y = 100;
    var Z = 1000;
}

console.log(Y);

{
    console.log(n);
    var n = 100;

    // const n=1000;
    {
        var _n = 1000;
    }
}

{
    var obj = {};
    console.log(obj);
    obj.name = "xiaoming";
    console.log(obj);
}

{
    var _kkk = Object.freeze({});
    console.log(_kkk);
    _kkk.length = 10;
    console.log(_kkk);
}

/*
*   全局对象属性
*   ES5中是window对象，node.js全局对象是global对象，ES5中全局变量和全局属性等价,node.js中全局变量需要显式的定义为全局属性，
*   未声明的全局变量自动成为全局属性在ES5中，ES6中，var和function声明的变量仍然是全局属性,let，const，class声明的变量不是全局属性
*   
*/

window.a = 10;
var h = 1000;
function getH() {
    console.log(22);
}

var gh = 1000;
var hg = 100;