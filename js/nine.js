/*
*   Symbol:保证每一种属性名都是独一无二的，后面添加的不会和前面冲突
*       1.一种新的原始数据类型，表示独一无二的值；
*       2.通过Symbo函数生成，对象的属性名可以有两种类型，一种是原来就有的字符串，另一种就是新增的Symbol类型，倮属性名属于Symbol类型，就是独一无二的，
*       3.不能使用new命令，否则会报错，Symbol是一个原始类型的值，不是对象，不能添加属性，类似于字符串的数据类型，
*       4.接受一个参数作为描述，显示在控制台
*       5.不能与其他类型中进行算数运算
*       6.可以显式的转为字符串
*       7.可以显式的转为布尔值，不能转为数值
*       8.作为属性名的Symbol:可以作为标示符，用于对象的属性名，不能用点运算符,在对象内部需要放在方括号内，
*       9.定义一组常量，保证这组常量的值都是不相等的，是公开属性，不是私有属性
*/

var s=Symbol();
console.log(typeof s);

var s2=Symbol('bar');
console.log(s2);
console.log(s2.toString());

var obj={
    toString(){
        return "abc";
    }
}

var s3=Symbol(obj);
console.log(s3);

var s4=Symbol();
var s5=Symbol();

console.log(s4===s5);

var sym=Symbol();
Boolean(sym);
console.log(Boolean(sym));

var mySymbol=Symbol();
var a={};
a[mySymbol]='Hello';

var a={
    [mySymbol]:"Hello"
};

var a={};
Object.defineProperty(a,mySymbol,{value:'Hello!'});

console.log(a);

var mySymbol=Symbol();
var a={};
a.mySymbol='hello!';
console.log(a.mySymbol);
console.log(a[mySymbol]);
console.log(a['mySymbol']);


//消除魔术字符串：在代码中多次出现，与代码形成强耦合的某一个具体的字符串或者数值，风格良好的代码，应该尽量消除魔术字符串，
var shapeType={
    triangle:Symbol()
}

function getArea(shape,options){
    var area=0;
    switch(shape){
        case shapeType.triangle:
            area=5*options.width*options.height;
            break;
    }

    return area;
}

getArea(shapeType.triangle,{width:100,height:100});


//遍历：Symbol作为属性名，不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回
var obj={};
var a=Symbol('a');
var b=Symbol('b');

obj[a]='Hello';
obj[b]='World';

var objectSymbols=Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);

var obj={
    [Symbol('my_key')]:1,
    enum:2,
    nonEnum:3
}

console.log(Reflect.ownKeys(obj));

//Symbol.for()重复使用一个Symbol值
var s1=Symbol.for('foo');
var s2=Symbol.for('foo');
console.log(s1===s2);

console.log(Symbol('bar')===Symbol('bar'));

var s1=Symbol.for('foo');
console.log(Symbol.keyFor(s1));

console.log();

//Symbol.for()登记的名字是全局环境的，可以在不同iframe或service worker中取到一个值，
iframe=document.createElement('iframe');
iframe.src=String(window.location);
document.body.appendChild(iframe);

iframe.contentWindow.Symbol.for('foo')===Symbol


//内置的Symbol值
//Symbol.hasInstance：指向一个内部方法，当其他对像使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法，
class MyClass{
    [Symbol.hasInstance](foo){
        return foo instanceof Array;
    }
}

console.log([1,2,3] instanceof new MyClass());


//Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象使用Array.prototype.concat()时，是否可以展开；
var arr1=['c','d'];
['a','b'].concat(arr1,'e');
console.log(arr1[Symbol.isConcatSpreadable]);


//Symbol.species:如果存在这个属性，就用构造函数创造新的实例对象

//Symbol.match()指向一个函数，当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值，
// String.prototype.match(regexp);

class MyMatcher{
    [Symbol.match](string){
        return 'hello world'.indexOf(string);
    }
}

'e'.match(new MyMatcher());

//Symbol.replace属性指向一个方法，当该对象被String.prototype.replace()方法调用时，会返回该方法的返回值
// String.prototype.replace(val,replaceValue);







