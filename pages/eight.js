'use strict';

/*
    *   Array
    *
    */
//直接写入变量和函数，作为对象的属性动画方法，
var foo = 'bar';
var baz = { foo: foo };
console.log(baz);
console.log(function (x, y) {
    return { x: x, y: y };
});

function f(a, b) {
    return { a: a, b: b };
}

console.log(f('xiao', 'ming'));

var o = {
    method: function method() {
        return 'Hello!';
    }
};

var birth = '2000/01/01';
var Person = {
    name: '张三',
    birth: birth,
    hello: function hello() {
        console.log('我的名字是', this.name);
    }
};

function getPoint() {
    var x = 1;
    var y = 10;
    return { x: x, y: y };
}

console.log(getPoint());

var ms = {};
function getItem(key) {
    return key in ms ? ms[key] : null;
}

function setItem(key, value) {
    ms[key] = value;
}

function clear() {
    ms = {};
}

// module.exports={
//     getItem:getItem,
//     setItem:setItem,
//     clear:clear
// };

var cart = {
    _wheels: 4,

    get wheels() {
        return this._wheels;
    },

    set wheels(value) {
        if (value < this._wheels) {
            throw new Error('数值太小了！');
        }
        this._wheels = value;
    }
};

var obj = {
    class: function _class() {}
};
console.log(obj);