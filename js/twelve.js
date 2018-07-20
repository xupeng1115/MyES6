/*
*遍历器(iterator):是一种接口，为各种不同的数据结构提供统一的访问机制，任何数据结构只要部署iterator接口，就可以完成遍历操作，
*作用：
*1.为各种数据结构，提供一个统一的、简便的访问接口，
*2.使得数据结构的成员能够按某种次序排列，
*3.ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费
*Iterator遍历过程：
*1.创建一个指针对象，指向当前数据结构的起始位置，本质上是一个指针对象。
*2.第一次调用指针对象的next方法，可以讲指针指向数据结构的第一个成员。
*3.第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
*4.不断调用指针对象的next方法，知道它指向数据结构的结束位置。
*每调用一次next方法都会返回数据结构的当前成员的信息。对象包含：value和done属性，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。
*
*/

//模拟next方法返回值的例子
function makeIterator(array){
    var nextIndex=0;
    return {
        next:function(){
            return nextIndex<array.length?{value:array[nextIndex++],done:false}:{value:undefined,done:true};
        }
    }
}

var it=makeIterator(['a','b']);

console.log(it.next());
console.log(it.next());
console.log(it.next());

//模拟无限运行的遍历器对象的例子
function idMaker(){
    var index=0;
    return {
        next:function(){
            return {value:index++,done:false};
        }
    }
}

var it=idMaker();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

//凡是部署了Symbol.iterator属性的数据结构，就称为部署了遍历器接口，调用了这个接口，就会返回一个遍历器对象。
console.log(it.next().value);








