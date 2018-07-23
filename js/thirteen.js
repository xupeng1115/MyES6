/*
*   Generator函数：
*           异步解决方案：可以理解为是一个状态机，封装了多个内部状态，执行Generator函数会返回一个遍历器对象，还是一个遍历器对象生成函数，可以遍历Generator函数内部的每一个状态。
*           形式上：是一个函数，有两个特征，1：function关键字与函数名之间有一个星号，2：函数体内部使用yield语句，定义不同的内部状态（yield:产出）
*           调用Generator函数后，改函数不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，是一个遍历器对象；
*           
*
*
*/

function* helloWorldGenerator(){
    yield 'hello';
    yield 'world';
    yield 'ending';

    // return "return";
}

var hw=helloWorldGenerator();
console.log(hw);
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

//Generator函数的遍历器对象的next方法的运行逻辑是：
//1.遇到yield语句，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值；
//2.下一次调用next方法时，再继续往下执行，直到遇到下一个yield语句。
//3.如果没有再遇到新的yield语句，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值作为返回的对象value属性值。
//4.如果没有return 语句，返回对像的value属性值为undefined;
//5，如果没有yield语句，就是一个单独的暂缓执行函数，yield语句不能用子普通函数中。
//6.使用for...of遍历Generator对象；

function* f(){
    console.log("执行了!");
}

var generator=f();
setTimeout(function(){
    generator.next();
},2000);

var arr=[1,[[2,3],4],[5,6]];
var flat=function* (a){
    a.forEach(function(item){
        // if(typeof item!=='number'){
        //     yield* flat(item);
        // }
    })
}

//实现斐波那契数列
function* fibonacci(){
    var [prev,curr]=[0,1];
    for(;;){
        [prev,curr]=[curr,prev+curr];
        yield curr;
    }
}

for(var n of fibonacci()){
    if(n>100)break;
    console.log(n);
}

//throw()方法：
var g=function* (){
    try{
        yield;
    }catch(e){
        console.log('内部捕获',e);
    }
};

var i=g();
i.next();

try{
    i.throw('a');
    i.throw('b');
}catch(e){
    console.log('外部捕获',e);
}

//yield*语句:在Generator函数中起到天爱yield语句的作用；
function* bar(){
    yield 'x';
    yield* foo();
    yield 'y';
}

function* foo(){
    yield 'a';
    yield 'b';
}

var bb=bar();
for(var i of bb){
    console.log(i);
}

//Generator实现状态机，没运行一次，改变一次状态，因为本身就包含状态信息；
var clock=function*(){
    while(true){
        console.log('Tick!');
        yield;
        console.log('Tock!');
        yield;
    }
}

var oc=clock();
oc.next();
oc.next();
oc.next();
oc.next();





