'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
    *  Function:
    *  
    * 
    */

//为参数设置默认值
function log(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';

    console.log(x, y);
}

log('Hello');
log('hello', 'china');
log('Hello', '');

function Point() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    this.x = x;
    this.y = y;
}

var p = new Point();
console.log(p);

function foo(_ref) {
    var x = _ref.x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 5 : _ref$y;

    console.log(x, y);
}

foo({});
foo({ x: 1 });

//双重默认值
function fetch(url) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$method = _ref2.method,
        method = _ref2$method === undefined ? 'GET' : _ref2$method;

    console.log(method);
}

fetch('http://example.com');

function m1() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$x = _ref3.x,
        x = _ref3$x === undefined ? 0 : _ref3$x,
        _ref3$y = _ref3.y,
        y = _ref3$y === undefined ? 0 : _ref3$y;

    console.log([x, y]);
}

function m2() {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 },
        x = _ref4.x,
        y = _ref4.y;

    console.log([x, y]);
}

m1();
m2();
m1({ x: 1 });
m2({ x: 1 });
m1({});
m2({});

//指定默认值后，length属性将失真
console.log(function (a) {}.length);
console.log(function () {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
}.length);
console.log(function (a, b) {
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
}.length);
console.log(function () {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    var b = arguments[1];
    var c = arguments[2];
}.length);

//先处于当前函数作用域，然后才是全局作用域
var x = 1;
function f(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

    console.log(y);
}

f(2);

var x = 1;
function f2() {
    var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x;
    return function () {
        var x = 2;
        console.log(y);
    }();
}

f2();

//将一个匿名函数作为默认值
var foo = 'outer';
function bar() {
    var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {
        return foo;
    };

    var foo = 'inner';
    console.log(func());
}

bar();

function bar2() {
    var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        return foo;
    };

    var foo = 'inner';
    console.log(func());
}

bar2();

var x = 1;
function fbar(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        x = 2;
    };

    var x = 3;
    y();
    console.log(x);
}
fbar();

function throwError() {
    throw new Error('Missing parameter');
}

function ftt() {
    var must = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : throwError();

    return must;
}

// ftt();
//rest参数
function add() {
    var sum = 0;

    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            sum += val;
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

    return sum;
}

console.log(add(2, 5, 3));
//rest没有length;
console.log(function () {}.length);

//替代apply方法
function f(x, y, z) {
    return x + y + z;
}

var args = [0, 1, 2];
console.log(f.apply(null, args));
console.log(f.apply(undefined, args));

//push函数用法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push.apply(arr1, arr2);
arr1.push([6, 7, 8]);
Array.prototype.push.apply(arr1, arr2);
console.log(arr1);
console.log(new (Function.prototype.bind.apply(Date, [null].concat([2015, 1, 1])))());
//合并数组
console.log([1, 2, 3, 4].concat([5, 6, 7, 8]));
console.log([0, 1].concat([2, 3], [4, 5]));
//解构赋值不能放在第一位
var x = 1,
    y = [2, 3, 4, 5, 6];

console.log(x);
console.log(y);
//将字符串转为真正的数组
console.log([].concat(_toConsumableArray('hello')));

//Map和Set结构，Generator数据转换为数组
var map1 = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
var arr = [].concat(_toConsumableArray(map1.keys()));

var go = /*#__PURE__*/regeneratorRuntime.mark(function go() {
    return regeneratorRuntime.wrap(function go$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 1;

                case 2:
                    _context.next = 4;
                    return 2;

                case 4:
                    _context.next = 6;
                    return 3;

                case 6:
                case 'end':
                    return _context.stop();
            }
        }
    }, go, this);
});
console.log([].concat(_toConsumableArray(go())));
function foo3() {}
console.log(foo3.name);

//箭头函数;
var f1 = function f1(v) {
    return v;
};
var f = function f(v) {
    return v;
};

console.log(f1(1));
console.log(f(10));

var h1 = function h1() {
    return 10;
};
var h = function h() {
    return 10;
};
console.log(h1());
console.log(h());

var g1 = function g1(n1, n2) {
    return n1 + n2;
};
var g = function g(n1, n2) {
    return n1 + n2;
};

console.log(g1(1, 2));
console.log(g(1, 2));

var sum = function sum(n1, n2) {
    var n = n1 + n2;return n;
};
console.log(sum(4, 5));

//返回对像：加大括号
var obj = function obj(id) {
    return { id: id, name: 'Temp' };
};
console.log(obj(23));

//可以解构赋值
var person = function person(_ref5) {
    var first = _ref5.first,
        last = _ref5.last;
    return first + '' + last;
};
console.log(person({ first: "xiao", last: 'ming' }));

console.log([1, 2, 3].map(function (x) {
    return x * x;
}));
console.log([1, 2, 3].map(function (x) {
    return x * x;
}));