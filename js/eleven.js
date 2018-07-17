/*
*Proxy:
*1.Proxy用于修改某些操作的默认值，等同于在语言层面作出修改，所以属于一种“元编程”,即对编程语言进行编程
*2.可以理解成，在目标对象之前架设一层拦截，外界对该对象饿访问，都必须先通过这层拦截，可以对外界的访问进行过滤和改写，代理某些操作，代理器
*3.Proxy代理的情况下，目标对象内部的this关键字会指向Proxy代理；
*
*
*/
var obj=new Proxy({},{
    get:function(target,key,receiver){
        console.log(`getting ${key}!`);
        return Reflect.get(target,key,receiver);
    },
    set:function(target,key,value,receiver){
        console.log(`setting ${key}!`);
        return Reflect.set(target,key,value,receiver);
    }
});

obj.count=1;
++obj.count;
console.log(obj.count);

//生成Proxy构造函数，用来生成Proxy实例，var proxy=new Proxy(target,handler);
//new Proxy()表示生成一个实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为,针对Proxy实例进行操作，
var proxy=new Proxy({},{
    get:function(target,property){
        return 35;
    }
})

console.log(proxy.time);
console.log(proxy.name);
console.log(proxy.title);

var target={};
var handler={};
var proxy=new Proxy(target,handler);
proxy.a='b';
console.log(target.a);

//将Proxy对象，设置到object.proxy属性，从而可以在object对象上调动。
var object={proxy:new Proxy(target,handler)};

//Proxy实例也可以作为其他对象的原型对象。
var proxy=new Proxy({},{
    get:function(target,property){
        return 35;
    }
})

var obj=Object.create(proxy);
console.log(obj.time);

//同一个拦截器函数，可以设置拦截多个操作。
var handler={
    get:function(target,name){
        if(name==='prototype'){
            return Object.prototype;
        }
        return 'Hello,'+name;
    },
    apply:function(target,thisBinding,args){
        return args[0];
    },
    construct:function(target,args){
        return {value:args[1]};
    }
}

var fproxy=new Proxy(function(x,y){
    return x+y;
},handler);

console.log(fproxy(1,2));
console.log(new fproxy(1,2));
console.log(fproxy.prototype===Object.prototype);
console.log(fproxy.foo);

//Proxy支持的拦截
//get(target,propKey,receiver):拦截对象属性的读取，
//set(target,propKey,value,receiver):拦截对象属性的设置，返回一个布尔值
//has(target,propKey):拦截propKey in proxy的操作，以及对象的hasOwnProperty方法，返回一个布尔值
//deleteProperty(target,propKey):拦截delete proxy[propKey]的操作，返回一个布尔值。
// （5）ownKeys(target)
// 拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，返回一个数组。该方法返回对象所有自身的属性，而Object.keys()仅返回对象可遍历的属性。

// （6）getOwnPropertyDescriptor(target, propKey)

// 拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。

// （7）defineProperty(target, propKey, propDesc)

// 拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。

// （8）preventExtensions(target)

// 拦截Object.preventExtensions(proxy)，返回一个布尔值。

// （9）getPrototypeOf(target)

// 拦截Object.getPrototypeOf(proxy)，返回一个对象。

// （10）isExtensible(target)

// 拦截Object.isExtensible(proxy)，返回一个布尔值。

// （11）setPrototypeOf(target, proto)

// 拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。

// 如果目标对象是函数，那么还有两种额外操作可以拦截。

// （12）apply(target, object, args)

// 拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。

// （13）construct(target, args)

// 拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。

//get():用于拦截某个属性的读取操作
var person={
    name:'张三'
};
var proxy=new Proxy(person,{
    get:function(target,property){
        console.log(target);
        console.log(property);
        if(property in target){
            return target[property];
        }else{
            throw new ReferenceError("Property \""+property+"\" does not exist.");
        }
    }
});

console.log(proxy.name);
// console.log(proxy.age);

//get方法可以继承
var proto=new Proxy({},{
    get(target,propertyKey,receiver){
        console.log('GET'+propertyKey);
        return target[propertyKey];
    }
});

//实现继承
var obj=Object.create(proto);
console.log(obj.xxx);

//实现数组读取负数的索引
function createArray(...elements){
    var handler={
        get(target,propKey,receiver){
            var index=Number(propKey);
            if(index<0){
                //获取数组最后一个元素
                propKey=String(target.length+index);
            }
            //获取映射值
            return Reflect.get(target,propKey,receiver);
        }
    };
    var target=[];
    target.push(...elements);
    
    //实现代理拦截
    return new Proxy(target,handler);
}

var arr=createArray('a','b','c');
console.log(arr[-1]);

//实现属性的链式操作
var pipe=(function(){
    return function(value){
        var funcStack=[];
        var oproxy=new Proxy({},{
            get:function(pipeObject,fnName){
                if(fnName==='get'){
                    //实现链式调用处理
                    return funcStack.reduce(function(val,fn){
                        return fn(val);
                    },value);
                }
                //闭包保存每次调用的值
                funcStack.push(window[fnName]);
                console.log(funcStack);
                return oproxy;
            }
        });

        return oproxy;
    }
}());

var double=n=>n*2;
var pow=n=>n*n;
var reverseInt=n=>n.toString().split("").reverse().join("")|0;

console.log(pipe(3));
console.log(pipe(3).double);
console.log(pipe(3).double.pow);
console.log(pipe(3).double.pow.reverseInt);
console.log(pipe(3).double.pow.reverseInt.get);

//数组迭代器函数
var arr=[1,2,3,4,5,6];

var add=arr.reduce(function(total,currentValue,currentIndex,arr){
    return total+currentValue;
},0);
console.log(add);

//实现一个生成各种DOM节点的通用函数dom.
var dom=new Proxy({},{
    get(target,property){
        console.log(property);
        return function(attrs={},...children){
            console.log(...children);
            var el=document.createElement(property);
            for(let prop of Object.keys(attrs)){
                el.setAttribute(prop,attrs[prop]);
            }

            for(let child of children){
                if(typeof child==='string'){
                    child=document.createTextNode(child);
                }
                el.appendChild(child);
            }
            return el;
        }
    }
});

console.log(dom);

var el=dom.div({},
    'Hello,my name is ',
    dom.a({href:'//example.com'},'Mark'),
    '. I like:',
    dom.ul({},
        dom.li({},'The web'),
        dom.li({},'Food'),
        dom.li({},'...actually that\'s it')
    )
)

console.log(el);

document.body.appendChild(el);

//set():用来拦截某个属性的赋值操作
//保证属性的值符合要求
var validator={
    set:function(obj,prop,value){
        console.log(obj);
        console.log(prop);
        console.log(value);
        if(prop==='age'){
            if(!Number.isInteger(value)){
                throw new TypeError('The age is not an integer');
            }
            if(value>200){
                throw new RangeError('The age seems invalid');
            }
        }
        
        //对于age以外的属性，直接保存
        obj[prop]=value;
    }
}

var person=new Proxy({},validator);

person.age=100;

// person.age='yong';
// person.age=3000;

//设置对象内部属性，属性名的第一个字符使用下划线开头，表示这些属性不应该被外部使用，结合get和set方法，就可以做到防止这些内部属性被外部读写。
var handler={
    get(target,key){
        invariant(key,'get');
        return target[key];
    },
    set(target,key,value){
        invariant(key,'set');
        target[key]=value;
        return true;
    }
}

function invariant(key,action){
    if(key[0]==='_'){
        throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }
}

var target={};
var proy=new Proxy(target,handler);
console.log(proy)
// proy._prop
// proy._prop="c";

//apply():拦截函数的调用、call和apply操作,接受三个参数，目标对象、目标对象的上下文和目标对象的参数数组。
var handler={
    apply(target,ctx,args){
        return Reflect.apply(...arguments);
    }
}

var target=function(){
    return 'I am the target';
};

var handler={
    apply:function(){
        return 'I am the proxy';
    }
}

var p= new Proxy(target,handler);

//p是Proxy的实例，当它作为函数调用时p(),被apply方法拦截，返回一个字符串
console.log(p());

//每次执行proxy函数（直接调用或call或apply调用）就会被apply方法拦截；直接调用Reflect.apply()方法，也会被拦截；
var twice={
    apply(target,ctx,args){
        return Reflect.apply(...arguments)*2;
    }
};
function sum(left,right){
    return left+right;
}
var proxy=new Proxy(sum,twice);

console.log(proxy(1,2));
console.log(proxy.call(null,5,6));
console.log(proxy.apply(null,[7,8]));
console.log(Reflect.apply(proxy,null,[9,10]));

//has()：用来拦截HasProperty操作，当判断对象是否具有某个属性时，方法生效，典型的操作就是in,但是不拦截hasOwnProperty操作，方法不判断一个属性是自身属性还是继承属性；
var handler={
    has(target,key){
        if(key[0]==='_'){
            return false;
        }
        return key in target;
    }
}

var target={_prop:'foo',prop:'foo'};
var proxy=new Proxy(target,handler);
console.log('_prop' in proxy);
console.log('prop' in proxy);

//如果源对象不可配置或禁止扩展，has拦截会报错；
var obj={a:10};
Object.preventExtensions(obj);
var p=new Proxy(obj,{
    has:function(target,prop){
        return false;
    }
})

// 'a' in p;

//对for ..in 也不生效；
var stu1={name:'张三',score:59};
var stu2={name:'李四',score:99};

var handler={
    has(target,prop){
        if(prop==='score'&&target[prop]<60){
            console.log(`${target.name} 不及格`);
            return false;
        }
        return prop in target;
    }
}

var oproxy1=new Proxy(stu1,handler);
var oproxy2=new Proxy(stu2,handler);

console.log('score' in oproxy1);
console.log('score' in oproxy2);

for(var a in oproxy1){
    console.log(oproxy1[a]);
}

for(var b in oproxy2){
    console.log(oproxy2[b]);
}

//construct():拦截new命令，接受两个参数，target:目标对象，args:构建函数的参数对象；
var p=new Proxy(function(){},{
    construct:function(target,args){
        console.log('called:' +args.join(', '));
        return {value:args[0]*10};
    }
})

console.log(new p(1).value);

//construct方法返回的必须是一个对象，否则会报错
var p=new Proxy(function(){},{
    construct:function(target,argumentsList){
        return 1;
    }
})

// console.log(new p());


//deleteProperty():拦截delete操作，如果这个方法抛出错误或者返回false,当前属性就无法被delete命令删除；
var handler={
    deleteProperty(target,key){
        invariant(key,'delete');
        return true;
    }
}

function invariant(key,action){
    if(key[0]==='_'){
        throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }
}

var target={_prop:'foo'};
var proxy=new Proxy(target,handler);
// delete proxy._prop;

//defineProperty():拦截Object.defineProperty操作
var handler={
    defineProperty (target,key,descriptor){
        return false;
    }
};
var target={};
var proxy=new Proxy(target,handler);
proxy.foo='bar';

//getOwnPropertyDescriptor():拦截Object.getOwnPropertyDescriptor返回一个属性描述对象或者undefined;


//Proxy.revocable():返回一个可取消的Proxy实例
var target={};
var handler={};
var {proxy,revoke}=Proxy.revocable(target,handler);

proxy.foo=123;
console.log(proxy.foo);

// revoke();
// proxy.foo;

//特殊的对象里的属性无法代理，可以通过this绑定原始对象来的实现；
// var date=new Date();
// var handler={};
// var proxy=new Proxy(date,handler);
// proxy.getDate();


/*
*Reflect概述
*1.Reflect对象与Proxy对象一样，目的：
*2.将Object对象的一些明显属于语言内部的方法(比如：Object.defineProperty)放到Reflect对象上，现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对像上。
*3.修改某些Object方法的返回结果，Object.defineProperty(obj,name,desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj,name,desc)则会返回false;
*4.获取默认行为，配合proxy一起处理对象；
*/



//使用Proxy实现观察者模式，一旦对象有变化，函数自动执行
const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    queuedObservers.forEach(observer => observer());
    return result;
}

//观察目标
var person=observable({
    name:'张三',
    age:20
});

//观察者
function print(){
    console.log(`${person.name},${person.age}`);
}

observe(print);
person.name="李四";








