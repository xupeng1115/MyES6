/*
*Proxy:
*1.Proxy用于修改某些操作的默认值，等同于在语言层面作出修改，所以属于一种“元编程”,即对编程语言进行编程
*2.可以理解成，在目标对象之前架设一层拦截，外界对该对象饿访问，都必须先通过这层拦截，可以对外界的访问进行过滤和改写，代理某些操作，代理器
*
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




