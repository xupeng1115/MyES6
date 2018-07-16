/*
*Set：
*1.类似于数组，成员值唯一，没有重复的值
*2.Set本身是一个构造函数，用来生成Set数据结构
*
*
*
*
*/

console.log(Set);
var s=new Set();
console.log(s);

console.log([2,3,5,4,2,2].map(x=>x*x));

//add方法不会添加重复的值；
[2,3,5,4,2,2].map(x=>s.add(x));

for(let i of s){
    console.log(i);
}

//可以接收一个数组作为参数，进行初始化,自动过滤重复项
var set=new Set([1,2,3,4,4]);
console.log(set);

//size:Set实例的元素长度;
console.log(set.size);

function divs(){
    return [...document.querySelectorAll("div")]; 
}

var set=new Set(divs());
console.log(set.size);

//数组去重
console.log([...new Set([1,2,3,4,5,6,6,3,2,1])]);

//Set加入值的时候，不会发生类型转换，相当于===,但是NaN相等,对象总不相等
console.log([...new Set([1,3,4,'3','4',NaN,NaN,{},{}])]);

//Set实例的属性和方法
var s=new Set([1,2,3]);
console.log(s);
console.log(s.constructor);
console.log(s.size);
console.log(Set.prototype.constructor);

//add(value):添加某个值，返回Set结构本身
s.add(1).add(5).add(5);
console.log(s);
//has(value)：返回一个布尔值，表示删除是否成功
console.log(s.has(1));
console.log(s.has(10));
//delate(value)：删除某个值，返回一个布尔值，表示是否删除成功，
s.delete(1);
console.log(s.has(1));

//Array.from方法可以将Set结构转为数组
var items=new Set([1,2,3,4,5]);
console.log(Array.from(items));

//数组去重
function dedupe(array){
    return  Array.from(new Set(array));
}
console.log(dedupe([1,2,3,4,4,5,6,6,6,67]));

//clear():清空Set数据结构
items.clear();
console.log(items);

//遍历操作:Set的顺序就是插入顺序，可以使用Set保存一个回调函数列表，调用时就能保证按照添加顺序调用
//keys()：返回键名的遍历器
//values():返回键值的遍历器
//entries():返回键值对的遍历器
//forEach():使用回调函数遍历每个成员
var set=new Set(['red','green','blue']);
console.log(set.keys());
for(var item of set.keys()){
    console.log(item);
}
console.log(set.values());
for(var item of set.values()){
    console.log(item);
}
console.log(set.entries());
for(var item of set.entries()){
    console.log(item);
}
//默认的遍历器生成函数就是它的values()方法
console.log(Set.prototype[Symbol.iterator]===Set.prototype.values);
for(var item of set){
    console.log(item);
}

//forEach():Set结构的实例的forEach()方法，对每个成员执行某种操作
set.forEach((value,key)=>console.log(value+"***"));
//转化为数组
console.log([...set]);

var set=new Set([1,2,3]);
console.log([...set].map(x=>x*2));
console.log(new Set([...set].map(x=>x*2)));
console.log(new Set([...set].filter(x=>(x%2)==0)));

//实现并集、交集、差集
var a=new Set([1,2,3]);
var b=new Set([4,3,2]);

console.log(new Set([...a,...b]));
console.log(new Set([...a].filter(x=>b.has(x))));
console.log(new Set([...a].filter(x=>!b.has(x))));

//遍历操作同步改变原来的Set结构，
var set=new Set([1,2,3]);
console.log(new Set([...set].map(val=>val*2)));
console.log(new Set(Array.from(set,val=>val*2)));

//WeakSet结构和Set类似，也是不重复的值的集合，但是，他和Set有两个区别，1：成员只能是对象，不能是其他类型的值，其次，WeakSet中的对象都是弱引用，垃圾回收会自动回收，WeakSet是不可遍历的
var ws=new WeakSet();
ws.add({name:"xiaoming"});
console.log(ws);

//将数组作为初始化的对象，数组元素自动成为WeakSet的成员；
var a=[[1,2],[3,4]];
var ws=new WeakSet(a);
console.log(ws);
//add(value):向WeakSet实例添加一个新成员
var obj={age:"30"};
ws.add(obj);
console.log(ws);
//某个值是否在WeakSet中
console.log(ws.has(obj));
//delete(value):清除指定成员
ws.delete(obj);
console.log(ws.has(obj));

//用来存储DOM节点，不用担心节点从文档移除，内存泄露
var foos=new WeakSet();
class Foo{
    constructor(){
        foos.add(this);
    }
    method(){
        if(!foos.has(this)){
            throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
        }
    }
}

console.log(Foo.prototype.constructor);

var foo=new Foo();


/*
*Map:
*对象时键值对的集合（Hash结构），但是传统上只能用字符串当作键，这给他的使用带来了很大的限制，Map结构类似于对象，也是键值对的集合，但是键的范围不限于字符串，各种值都可以作为键，Map结构提供了“值-值”的对应，是一种更完善的Hash结构的体现，
*
*
*/
var m=new Map();
console.log(m);
var o={p:'Hello World'};

//设置一个键值对
m.set(o,'content');
console.log(m);

console.log(m.get(o));
console.log(m.has(o));
m.delete(o);
console.log(m.has(o));

//接受一个数组作为参数，数组里的参数也是数组
var map=new Map([['name','张三'],['title','author']]);

console.log(map.size);
console.log(map.has('name'));
console.log(map.get('name'));

//true和'true'是两个不同的键
var m=new Map([
    [true,'foo'],
    ['true','bar']
]);

console.log(m.get(true));
console.log(m.get('true'));

//对同一个键多次赋值，后面的值将覆盖前面的值
var map=new Map();
map.set(1,'aaa');
map.set(1,'bbb');
console.log(map.get(1));

//只有对同一个对象的引用，才是同一个键
var map=new Map();
map.set(['a'],555);
console.log(map.get(['a']));

//NaN是一个键
var map=new Map();
map.set(NaN,123);
console.log(map.get(NaN));
map.set(-0,123);
console.log(map.get(+0));

//size:返回Map结构的成员总数
var map=new Map();
map.set('foo',true);
map.set('bar',false);

console.log(map.size);

//set(key,value):设置key所对应的键值，然后返回整个Map结构，可以用链式写法
var m=new Map();
m.set('dsd',232).set('999',200032);
console.log(m);

//get(key):读取某个键值
console.log(m.get('999'));

//has(key)：是否有某个键值
console.log(m.has('999'));

//delete(key):删除摸个键值
m.delete('999');
console.log(m.has('999'));

//clear:清除map对象所有键值对
m.clear();
console.log(m);

//keys():返回键名的遍历器
var map=new Map([
    ['F','no'],
    ['T','yes']
]);

for(var key of map.keys()){
    console.log(key);
}

//values():返回键值的遍历器
for(var key of map.values()){
    console.log(key);
}

//entries():返回所有成员的遍历器for
for(var key of map.entries()){
    console.log(key);
}


//map结构转为数组结构，使用扩展运算符(...)
var map=new Map([
    [1,'one'],
    [2,'two'],
    [3,'three']
])

console.log([...map.keys()]);
console.log([...map.values()]);
console.log([...map.entries()]);
console.log([...map]);

let _counter = new WeakMap();
let _action = new WeakMap();

class Countdown {
  constructor(counter, action) {
    _counter.set(this, counter);
    _action.set(this, action);
  }
  dec() {
    let counter = _counter.get(this);
    if (counter < 1) return;
    counter--;
    _counter.set(this, counter);
    if (counter === 0) {
      _action.get(this)();
    }
  }
}

let c = new Countdown(2, () => console.log('DONE'))

c.dec();
c.dec()



