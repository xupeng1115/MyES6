/*
*   Promise:异步编程的一种方案，比传统的解决方案--回调函数和事件--更合理和更强大。提供Promise对象；
*       所谓Promise:简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果，从语法上说，Promise是一个对象，从它可以获取异步操作的消息，
*   特点：
*       (1)对象的状态不受外界影响，Promise对象代表一个异步操作，有三种状态：Pending(进行中)、Resolves（已完成）和Rejected(已失败).只有异步操作的结果，可以决定当前是哪一种状态， 
*           任何其他操作都无法改变这个状态。
*      （2）一旦状态改变，就不会在变，任何时候都可以得到这个结果，只能从：Pending变为Resolved和从Pending变为Rejected,只要你错过了它，再去监听，
*   优点：
*       有了promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数，此外，Promise对象提供统一的接口
*   缺点：
*       无法取消Promise,一旦新建它就会立即执行，无法中途取消，如果不设置回调函数，Promise内部抛出错误，不会反应到外部，当处于Pending状态时，无法得知目前进展到哪一个阶段
*       如果某县事件不断反复的发生，使用stream模式不部署Promise更好。
*       
*/



//用法：
var promise=new Promise(function(resolve,reject){
    if(true/*异步操作成功*/){
        // resolve(value);
    }else{
        // reject(error);
    }
});

//resolve函数作用：将Promise对象的状态从“未完成”变为“成功”即从（pending变为resolved）在异步操作成功时调用，并将异步操作饿结果，作为参数传递出去；
//reject函数的作用是：将Promise对象的状态从"未完成"变为“失败”（即从pending变为rejected）,在异步操作失败时调用，并将异步操作爆出错误，作为参数传递出去；
//Promise实例生成后，可以用then方法分别制定resolved和rejected状态的回调函数；

promise.then(function(value){
    //success
},function(error){
    //failure
})

//实例
function timeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms,'done');
    });
}

timeout(100).then((value)=>{
    console.log(value);
})

//作用类似这里
setTimeout(function(value){
    console.log(value);
},1000,'dddd');

var promise=new Promise(function(resolve,reject){
    console.log('Promise');
    resolve();
})

promise.then(function(){
    console.log('Resolved.');
})

console.log('Hi');

//异步加载图片
function loadImageAsync(url){
    return new Promise(function(resolve,reject){
        var image=new Image();

        image.onload=function(){
            resolve(image);
        };

        image.onerror=function(){
            reject(new Error('Could not load image at '+url));
        };

        image.src=url;

    });
}


//实现ajax操作
var getJSON=function(){
    var promise=new Promise(function(resolve,reject){
        var client=new XMLHttpRequest();
        client.open("GET",url);
        cllent.onreadystatechange=handler;
        client.responseType="json";
        client.setRequestHeader('Accept','application/json');
        client.send();

        function handler(){
            if(this.readyState!==4){
                return;
            }
            if(this.status===200){
                resolve(this.response);
            }else{
                reject(new Error(this.statusText));
            }
        }
    })
    return promise;
}

getJSON("/posts.json").then(function(json){
    console.log('Contents: '+json);
},function(error){
    // console.error('出错了',error);
})

//一个异步操作的结果是返回另一个异步操作
var p1=new Promise(function(resolve,reject){
    // setTimeout(()=>reject(new Error('fail')),3000);
})

var p2=new Promise(function(resolve,reject){
    setTimeout(()=>resolve(p1),1000);
})

//由于p2的resolve（）方法返回p1，所以p2.then()方法指向p1,然会触发catch函数；
p2.then(result=>console.log(result)).catch(error=>console.log(error));

//promise实例具有then方法，作用是：为promise实例添加状态改变时的回调函数，then方法的第一个参数是resolve状态的回调函数，第二个参数开始reject状态的回调函数；
//then方法返回的一个新的promise实例，采用链式写法，then后面也可以调用另一个then方法；

//promise的catch方法是then方法的别名，用于指定发生错误时的回调函数。

//promise.all()方法用于将多个promise实例包装成一个新的promise实例,参数可以不是promise实例，但必须具有iterator接口，
//p的状态由p1,p2,p3决定，
//（1)只有p1、p2、p3的状态都变成fulfilled，p的状态才会变为fulfilled,此时p1,p2,p3的返回值组成一个数组传递给p的回调哈数，
//（2）只要p1、p2、p3之中有一个rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值会传递给p的回调函数。
var p1,p2,p3;
var p=Promise.all([p1,p2,p3]);

//promise.race()方法同样是将多个promise实例，包装成一个新的promise实例,只要p1.p2.p3之中有一个实例率先改变状态，p的状态就跟着改变，率先改变的promise实例的返回值就传递给p的回调函数。
var p=Promise.race([p1,p2,p3]);

//resolve方法将现有对象转为promise对象。
var p1=Promise.resolve('foo');
//等价于：
var p2=new Promise(resolve=>resolve('foo'));

//Promise.reject(reason)方法也会返回一个新的Promise实例，该实例的状态为rejected

//done：不管then还是catch方法，都会最会捕捉错误执行，

//finally：不管promise对象最后状态如何，都会执行的操作，他与done方法的最大区别是他接受一个普通的回调函数作为参数，改函数不管怎么都执行；









