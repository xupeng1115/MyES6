'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _marked = /*#__PURE__*/regeneratorRuntime.mark(fibs);

/*
    *   变量解构赋值
    *   允许按照一定的模式规则从数组和对象中提取数据，按照对应位置，给变量重新赋值，称为解构。
    *   属于模式匹配，两边模式一直，进行赋值操作。
    *   如果不是数组或或对象将报错
    *   Set结构的数据也可以使用解构赋值
    *   
    */

var a = 1,
    b = 2,
    c = 3;
var foo = 222,
    bar = 444,
    cal = 666,
    ko = 999;
var _ref = [1, 2, 3],
    third = _ref[2];
var _ref2 = [1, 2, 34],
    aa = _ref2[0],
    cc = _ref2[2];
//...foot是截取了头部元素的一个数组

var head = 11,
    foot = [22, 3, 3, 44, 55, 666];

var _ref3 = [1, 2],
    uuu = _ref3[0],
    ooo = _ref3[1],
    kkk = _ref3[2],
    hhh = _ref3.slice(3);
//也可以使用var 


var ppp = 111,
    eee = 222;
//也可以使用const

var yyy = 444,
    ttt = 555;
var _ref4 = [33],
    pp = _ref4[0],
    tt = _ref4[1];
var r = 1,
    _ref5 = [2, 3],
    n = _ref5[0],
    m = 0;
//如果不是数组将报错
// let [j]=1;
// let [jh]=true;
// let [hj]=undefined;
// let [hg]={};
// let [kj]=null;
// let [kl]=NaN;

//Set结构使用解构赋值

var oSet = new Set([1, 2, 3]);

var _ref6 = new Set(['a', 'b', 'c']),
    _ref7 = _slicedToArray(_ref6, 1),
    sd = _ref7[0];

//生成器函数


function fibs() {
   var a, b, _ref8;

   return regeneratorRuntime.wrap(function fibs$(_context) {
      while (1) {
         switch (_context.prev = _context.next) {
            case 0:
               a = 0;
               b = 1;

            case 2:
               if (!true) {
                  _context.next = 10;
                  break;
               }

               _context.next = 5;
               return a;

            case 5:
               _ref8 = [b, a + b];
               a = _ref8[0];
               b = _ref8[1];
               _context.next = 2;
               break;

            case 10:
            case 'end':
               return _context.stop();
         }
      }
   }, _marked, this);
}

var _fibs = fibs(),
    _fibs2 = _slicedToArray(_fibs, 6),
    fi = _fibs2[0],
    se = _fibs2[1],
    td = _fibs2[2],
    fo = _fibs2[3],
    fv = _fibs2[4],
    si = _fibs2[5];

//允许默认值


var _ref9 = [],
    _ref9$ = _ref9[0],
    uy = _ref9$ === undefined ? true : _ref9$;
var _true = true,
    ui = _true === undefined ? false : _true;
var gy = 'a',
    _undefined = undefined,
    yg = _undefined === undefined ? 'b' : _undefined;
var _ref10 = null,
    kl = _ref10 === undefined ? 1 : _ref10;


function vf() {
   return 44;
}

//只有没有值得时候才会执行vf();
var _ = 11113333,
    df = _ === undefined ? vf() : _;
var _ref11 = [],
    _ref11$ = _ref11[0],
    er = _ref11$ === undefined ? vf() : _ref11$;

//默认值可以使用其他变量,但是变量必须已经声明过才行；

var _ref12 = [],
    _ref12$ = _ref12[0],
    we = _ref12$ === undefined ? df : _ref12$;
// let [rt=op,op=1]=[];


//用于对象的解构赋值,对像的属性没有顺序。

var _bn$nb = { bn: "xiaoming", nb: "AB" },
    bn = _bn$nb.bn,
    nb = _bn$nb.nb;
var _cf = { cf: "title" },
    cf = _cf.cf,
    fc = _cf.fc;
var _dx$xd = { dx: "xiaoming", xd: "HEHE" },
    xd = _dx$xd.xd,
    dx = _dx$xd.dx,
    xxd = _dx$xd.xxd;

//变量名和属性名不一致时

var _az = { az: 100 },
    za = _az.az;


var obj1 = { ffg: "llll", ggf: "tttt" };
var kkl = obj1.ffg,
    jjjh = obj1.ggf;

//对象赋值的实质是先找到同名的属性然后在找到同名的属性名，将属性值赋值给属性的属性值；

var _ddg = { ddg: "小明" },
    ddg = _ddg.ddg;

//也可以使用嵌套结构

var obj3 = {
   poi: ['Hello', { ykl: 'World' }]
};

var poi = obj3.poi,
    _obj3$poi = _slicedToArray(obj3.poi, 2),
    oip = _obj3$poi[0],
    ykl = _obj3$poi[1];

//也可以指定默认值,默认值生效的条件是


var _ref13 = {},
    _ref13$uuo = _ref13.uuo,
    uuo = _ref13$uuo === undefined ? 111 : _ref13$uuo;
var _ref14 = {},
    _ref14$eer = _ref14.eer,
    ttr = _ref14$eer === undefined ? "AB" : _ref14$eer;

//避免将解构赋值的大括号给写在行首，可以放在一个括号内；

var gghh = void 0;


//也可以将数组的值进行结构赋值
var _gghh = { gghh: "小明" };
gghh = _gghh.gghh;
var arr1 = [1, 2, 3, 4, 5];
var eq1 = arr1[0],
    eq4 = arr1[arr1.length - 1];

//字符串也可以解构赋值

var _hello = 'hello',
    _hello2 = _slicedToArray(_hello, 4),
    m1 = _hello2[0],
    m2 = _hello2[1],
    m3 = _hello2[2],
    m4 = _hello2[3];
//类数组对象有length属性


var _hello3 = 'hello',
    len = _hello3.length;

//数字和布尔值的解构赋值:先转化为对象，然后将toString属性赋值给变量使用，null,和undefined没有toString属性所以不能进行解构赋值

var _true2 = true,
    boor = _true2.toString;
var _2 = 232,
    booor = _2.toString;

//函数参数的解构赋值

function add(_ref15) {
   var _ref16 = _slicedToArray(_ref15, 2),
       x = _ref16[0],
       y = _ref16[1];

   return x + y;
}

console.log(add([1, 4]));
console.log([[1, 3], [3, 5]].map(function (_ref17) {
   var _ref18 = _slicedToArray(_ref17, 2),
       x = _ref18[0],
       y = _ref18[1];

   return x + y;
}));

//函数的解构赋值也可以使用默认值
function dicuse(_ref19) {
   var _ref20 = _slicedToArray(_ref19, 2),
       _ref20$ = _ref20[0],
       x = _ref20$ === undefined ? 100 : _ref20$,
       _ref20$2 = _ref20[1],
       y = _ref20$2 === undefined ? 1000 : _ref20$2;

   return x + y;
}
console.log(dicuse([1, 2]));
console.log(dicuse([]));

console.log(dicuse([1, 2]));
console.log(dicuse([1, 2, 3, 4]));

//圆括号问题：在模式里尽量不使用圆括号；
//变量声明语句不能使用圆括号；
//函数参数不能使用圆括号；
//赋值语句模式不能使用圆括号；
//赋值语句的非模式部分可以使用圆括号；

//交换变量值
var kop = 10;
var pok = 100;


//接收多个变量值
var _ref21 = [pok, kop];
kop = _ref21[0];
pok = _ref21[1];
function getValue() {
   return [1, 2, 3];
}

var _getValue = getValue(),
    _getValue2 = _slicedToArray(_getValue, 3),
    gtt = _getValue2[0],
    tgg = _getValue2[1],
    rgg = _getValue2[2];

//提取json值


var jsonData = {
   id: "xiaoming",
   stuts: "OK",
   data: [867, 9999]
};

var id = jsonData.id,
    data = jsonData.data,
    stuts = jsonData.stuts;

//函数定义默认值

jQuery.ajax = function (url) {
   var _ref22 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
       _ref22$async = _ref22.async,
       async = _ref22$async === undefined ? true : _ref22$async,
       _ref22$beforeSend = _ref22.beforeSend,
       beforeSend = _ref22$beforeSend === undefined ? function () {} : _ref22$beforeSend,
       _ref22$cache = _ref22.cache,
       cache = _ref22$cache === undefined ? true : _ref22$cache,
       _ref22$complete = _ref22.complete,
       complete = _ref22$complete === undefined ? function () {} : _ref22$complete,
       _ref22$crossDomain = _ref22.crossDomain,
       crossDomain = _ref22$crossDomain === undefined ? false : _ref22$crossDomain,
       _ref22$global = _ref22.global,
       global = _ref22$global === undefined ? true : _ref22$global;

   console.log("heeee");
};

//遍历map结构
var map = new Map();
map.set('first', 'second');
console.log(map);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
   for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      console.log(key + " is " + value);
   }
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

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
   for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = _slicedToArray(_step2.value, 1),
          key = _step2$value[0];

      console.log(key);
   }
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

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
   for (var _iterator3 = map[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _step3$value = _slicedToArray(_step3.value, 2),
          value = _step3$value[1];

      console.log(value);
   }

   //输入模块的指定方法
   // const {obj4,obj5}=require("source-map");
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