'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/*
    *   Array
    *  
    * 
    */

//将两类对象转换为数组：Array.from() ,接受第二个参数用来处理数组
var obj = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

var arr1 = [].slice.call(obj);
console.log(arr1);

var arr2 = Array.from(obj);
console.log(arr2);

var ps = document.querySelectorAll('p');
Array.from(ps).forEach(function (p) {
    console.log(p);
});

//作用和map函数一样
console.log(Array.from(obj, function (x) {
    return x + '&&&';
}));
//将字符串转换为数组
console.log(Array.from('abcdef'));

//将一组值转换为数组
console.log(Array.of(3, 233, 3434));

//数组实例的copyWithin()：在数组内部，将制定位置的成员复制到其他位置，返回当前数组
//Array.prototype.copyWithin(target,start=0,end=this.lenth);    //target:替换数据的开始的位置，start:读取数据，默认0，可为负数，end:停止读取数据位置，默认数据长度，可为负值;
console.log([1, 2, 3, 4, 5, 6].copyWithin(0, 3));
console.log([1, 2, 3, 4, 5, 6].copyWithin(0, 2, 4));

//数组实例的find（）方法和findIndex():参数是一个回调函数，返回符合条件的第一个成员。
console.log([1, 4, -5, 19].find(function (n) {
    return n < 0;
}));

console.log([1, 5, 10, 15].find(function (value, index, arr) {
    return value > 9;
}));

console.log([1, 5, 10, 15].findIndex(function (value, index, arr) {
    return value > 9;
}));

//填充：fill()，可以有起始位置和结束位置
console.log(['a', 'b', 'c'].fill(7));
console.log(['a', 'b', 'c'].fill(7, 1, 2));

//遍历数组：entries()对键值对遍历，keys()对键名遍历，values()对键值遍历
console.log(['a', 'b', 'c'].keys(7));

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = ['a', 'b'].keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var index = _step.value;

        console.log(index);
    }
    // for(let index of ['a','b'].values()){
    //     console.log(index);
    // }
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
    for (var _iterator2 = ['a', 'b'].entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            _index = _step2$value[0],
            el = _step2$value[1];

        console.log(_index, el);
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

console.log(['a', 'b', 'c'].entries().next().value);

//Array.prototype.inclueds()返回一个布尔值,是否包含给定的值
console.log([1, 2, 3].includes(2));
// console.log([{"name":"xiaoming"},{"title":"work"},{"age":"40"}].includess({"name":"xiaoming"}));

console.log(0 in [undefined, undefined, undefined, undefined]);