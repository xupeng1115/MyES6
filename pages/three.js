"use strict";

var _templateObject = _taggedTemplateLiteral(["Hello ", " world ", ""], ["Hello ", " world ", ""]),
    _templateObject2 = _taggedTemplateLiteral(["First line\nSecond line"], ["First line\\nSecond line"]),
    _templateObject3 = _taggedTemplateLiteral(["hello\nworld"], ["hello\\nworld"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
    *   字符串扩展
    *   ES6增加对字符串的扩展
    *   允许使用Unicode字符码点来使用表示字符\xxxx,超出范围使用双字节表示,比如表示一个汉字使用两个字符；
    */

var a = "a";
var b = "b";
var c = "\uD842\uDFB7";
//超过0xFFFF的表示一个字符再加上后面的字符的组合
var d = "\u20BB7";
var e = "\u20BB777777";
//将码点放入一个{}内可以计算出一个字符值
var f = "\uD842\uDFB7";
var g = "ABC";
var h = "hello";
var hello = 123;
//    console.log(hell\u{6f});
console.log("\uD83D\uDE80" === "\uD83D\uDE80");

//js共有6中方式来命名表示一个字符
console.log('\z' === 'z');
//    console.log('\172' === 'z');
//    console.log('\172');
console.log('\x7A' === 'z');
console.log("z" === 'z');
console.log("z" === 'z');

//js中字符以16进制进行处理，占用两个字节，如果超过0xffff将会使用4个字节，看做2个字符
//超出两个字节
var i = "𠮷";
console.log(i.length);
console.log(i.charAt(0));
console.log(i.charAt(1));
console.log(i.charCodeAt(0)); //前两个字节的十进制值
console.log(i.charCodeAt(1)); //后两个字节的十进制值
console.log(i.codePointAt(0)); //返回第一个字符的的十进制值，可以识别4个字节存储值
console.log(i.codePointAt(1)); //返回第二个字符的十进制值
console.log(i.codePointAt(0).toString(16)); //返回第一个字符的16进制值

var j = "我是小明";
console.log(j.length);
console.log(j.codePointAt(0));
console.log(j.codePointAt(1));
console.log(j.codePointAt(2));
console.log(j.codePointAt(3));

//遍历字符串
var k = "𠮷abc";
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = k[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _i2 = _step.value;

        console.log(_i2.codePointAt(0).toString(16));
    }

    //利用codePointAt()测试字符是否是四个字节
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

function isBit(s) {
    return s.codePointAt(0) > 0xffff;
};
var isKey = isBit("𠮷");
console.log(isKey);
var isKey1 = isBit("a");
console.log(isKey1);

//String.fromCharCode():用于返回某个码点的字符,但是不能识别大于4个字节的码点
console.log(String.fromCharCode(0x20BB7));

//String.fromCodePoint():可以识别大于4个字节的码点,作用上和codePointAt()相反,当有多个参数时将有合并为一个字符
console.log(String.fromCodePoint(134071));
console.log(String.fromCodePoint(0x20BB7));
console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === "x\uD83D\uDE80y");

//字符串的遍历器接口,可以使用for...of..遍历
var l = "我是AB";
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = l[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _i3 = _step2.value;

        console.log(_i3);
    }

    //可以识别大于0xffff码点的字符
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

for (var _i = 0; _i < k.length; _i++) {
    console.log(k[_i]); //不能识别大于4个字节的字符
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = k[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _i4 = _step3.value;

        console.log(_i4); //可以识别大于四个字节的字符
    }

    //at()：返回一个位置的字符
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

console.log(k.charAt(0)); //不能识别码点大于oxffff的字符
// console.log(k.at());        //可以识别码点大于0xffff的字符

//normalize()方法用来将有语音的字符和字符本身合并为一个字符，正视化字符,只能识别两个字符的Unicode；
console.log("\u01D1".normalize() === "O\u030C".normalize());
console.log("O\u030C".normalize('NFC').length); //参数NFC等价合成
console.log("O\u030C".normalize('NFD').length); //参数NFC等价分解

//includes():返回是否包含参数字符串,可以指定开始查询的位置
console.log(k.includes("𠮷", 0));
//startsWith():是否是头部，可以指定开始查询的位置
console.log(k.startsWith("𠮷", 0));
//endsWith():是否是尾部，可以指定开始查询的位置，但是是指针对前n个位置进行查询。
console.log(k.endsWith("c", 0));

//repeat()：指定可以重复的字符串,可以重复n次,返回一个新字符串,不改变原来字符串
console.log(k.repeat(2));
console.log(k.repeat());
console.log(k.repeat(0)); //返回空字符串
console.log(k.repeat(2.9)); //四舍五入参数,向下取整

// console.log(k.repeat(-2));      //负数报错
// console.log(k.repeat(Infinity));        //报错
console.log(k.repeat(-0.1)); //-1到0之间的数等于0;
console.log(k.repeat(NaN)); //NaN等于0;
console.log(k.repeat('3')); //转化为数字
console.log(k.repeat('na')); //转化为数字    
console.log(k.repeat('a')); //转化为数字    

//padStart(),padEnd()字符串补全，第一个参数是要来指定字符串的长度，第二个参数指定补全的字符串内容；
console.log(k.padStart(5, "d")); //第一个参数等于字符串长度，返回原始值          
console.log(k.padStart(4, "d")); //第二个参数小于字符串长度，返回原始值
console.log(k.padStart(6, "d")); //第三个参数大于字符串长度，返回补全后的值
console.log(k.padStart(7, 'def')); //截取补全值；
console.log(k.padStart(8)); //如果没有补全值，则使用空格代替；
console.log(k.padStart(10));
console.log(k.padEnd(12, "我是小明"));

//matchAll()：返回一个正则表达式所有的匹配
var reg = /明/g;
console.log('我是小明，我也是小明'.match(reg));

//模板字符串
//传统输出模板
$("body").append('<div style="color:#ffbf00;font-size:15px;">我是小明</div>');

//字符串模板

//普通字符串
$("body").append("\n       <div style=\"color:#ff6060;\">\u6211\u4E5F\u662F\u5C0F\u660E</div>\n   ");
//多行字符串
$("body").append("\n       <div style=\"color:#ff6060;\">\n           \u6211\u4E5F\u662F\u5C0F\u660E\n           \u6211\u8FD8\u662F\u5C0F\u660E\n       </div>\n   ");
//嵌入变量
$("body").append("\n       <div style=\"color:pink\">" + k + "</div>\n   ");
var obj1 = {
    name: "我是AB",
    age: 30
};
$("body").append("\n       <div style=\"color:green;\">" + obj1.name + "\uFF0C\u6211" + obj1.age + "\u5C81</div>\n   ");
//在模板字符串中使用``号要转义；
$("body").append("\n       <div style=\"color:blue;\">`" + obj1.name + "\uFF0C`\u6211" + obj1.age + "\u5C81\u4E86</div>\n   ");
//所有的空格和换行都被保留，可以使用trim()方法来去除
$("body").append("\n\n       <ul>\n           <li>First</li>\n           <li>\n               Second\n           </li>  \n       </ul>\n\n   ".trim());
var oStr = "" + (k + "我是AB");
//模板字符串可以调用函数
function getStr() {
    return "Hello world";
}
var oStr1 = "" + getStr();

//可以调用对象
var obj2 = {
    name: "Hello Ketty",
    title: "kkkkk"
};
var oStr2 = "" + obj2;
//没有声明将报错
// let oStr3=`${place}`;
var oStr3 = "     hello    world   ".trim();
//变量中包含模板字符串
var oStr4 = 'return' + '`Hello ${obj2.name} ${name}`';
//作为一个函数的返回值；
var func = new Function('name', oStr4);
console.log(func('Jack'));
//调用eval
var oStr5 = '(name)=>`Hello ${name}`';
var func1 = eval.call(null, oStr5);
console.log(func1('Jack'));
//模板编译
var arr1 = [{
    name: "A",
    age: 20
}, {
    name: "B",
    age: 30
}, {
    name: "C",
    age: 40
}, {
    name: "D",
    age: 50
}];
//<%...%>放置js代码，<%=...%>输出js表达式
// let tem=`
//     <ul>
//         <% for(let i=0; i < arr1.length; i++) { %>
//             <li><%= arr1[i] %></li>
//         <% } %>
//     </ul>
// `;
// $("body").append(tem);

//标签模板
console.log("123");

var m = 5;
var n = 10;
function tag(s, v1, v2) {
    console.log(s);
    console.log(v1);
    console.log(v2);
}
//tag在模板字符串前使用，是一个函数调用，返回值就是调用结果。
tag(_templateObject, m + n, m * n);
//等同于
tag(['Hello', 'world', ''], 15, 50);
//字符串模板甚至可以嵌入其他语言，进行解析
// java`
//     class HelloWorldApp {
//         public static void main(String[] args) {
//             System.out.println(“Hello World!”); // Display the string.
//         }
//     }
// `
// HelloWorldApp.main();
//String.raw():返回个\都被转义的字符串；
console.log("First line\nSecond line");
function myRaw(s) {
    return String.raw(s);
}
console.log(String.raw(_templateObject2));
var o = "hello\nworld";
console.log(String.raw(_templateObject3));

//String.raw()作为函数使用，第一个参数是应该是一个具有raw属性的对象，raw属性应该是一个数组；
console.log(String.raw({ raw: 'text' }, 0, 1, 2));