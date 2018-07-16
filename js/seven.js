/*
    *  Function:
    *  
    * 
    */

    //为参数设置默认值
    function log(x,y='world'){
        console.log(x,y);
    }

    log('Hello');
    log('hello','china');
    log('Hello','');

    function Point(x=0,y=0){
        this.x=x;
        this.y=y;
    }

    var p=new Point();
    console.log(p);
    
    function foo({x,y=5}){
        console.log(x,y);
    }

    foo({});
    foo({x:1});

    //双重默认值
    function fetch(url,{method='GET'}={}){
        console.log(method);
    }

    fetch('http://example.com');

    function m1({x=0,y=0}={}){
        console.log([x,y]);
    }

    function m2({x,y}={x:0,y:0}){
        console.log([x,y]);
    }

    m1();
    m2();
    m1({x:1});
    m2({x:1});
    m1({});
    m2({});


    //指定默认值后，length属性将失真
    console.log((function(a){}).length);
    console.log((function(a=5){}).length);
    console.log((function(a,b,c=5){}).length);
    console.log((function(a=5,b,c){}).length);

    //先处于当前函数作用域，然后才是全局作用域
    var x=1;
    function f(x,y=x){
        console.log(y);
    }

    f(2);
    
    var x=1;
    function f2(y=x){
        let x=2;
        console.log(y);
    }

    f2();

    //将一个匿名函数作为默认值
    var foo='outer';
    function bar(func = x => foo){
        let foo='inner';
        console.log(func());
    }

    bar();
    
    function bar2(func=()=>foo){
        let foo='inner';
        console.log(func());
    }

    bar2();

    var x=1;
    function fbar(x,y=function(){x=2;}){
        var x=3;
        y();
        console.log(x);
    }
    fbar();

    function throwError(){
        throw new Error('Missing parameter');
    }

    function ftt(must=throwError()){
        return must;
    }

    // ftt();
    //rest参数
    function add(...values){
        let sum=0;
        for(var val of values){
            sum+=val;
        }

        return sum;
    }

    console.log(add(2,5,3));
    //rest没有length;
    console.log((function(...a){}).length);

    //替代apply方法
    function f(x,y,z){
        return x+y+z;
    }

    var args=[0,1,2];
    console.log(f.apply(null,args));
    console.log(f(...args));

    //push函数用法
    var arr1=[0,1,2];
    var arr2=[3,4,5];
    arr1.push(...arr2);
    arr1.push([6,7,8]);
    Array.prototype.push.apply(arr1,arr2);
    console.log(arr1);
    console.log(new Date(...[2015,1,1]));
    //合并数组
    console.log([1,2,3,4,...[5,6,7,8]]);
    console.log([...[0,1],...[2,3],...[4,5]]);
    //解构赋值不能放在第一位
    var [x,...y]=[1,2,3,4,5,6];
    console.log(x);
    console.log(y);
    //将字符串转为真正的数组
    console.log([...'hello']);
    
    //Map和Set结构，Generator数据转换为数组
    var map1=new Map([
        [1,'one'],
        [2,'two'],
        [3,'three'],
    ])
    var arr=[...map1.keys()];

    var go=function*(){
        yield 1;
        yield 2;
        yield 3;
    };
    console.log([...go()]);
    function foo3(){}
    console.log(foo3.name);

    //箭头函数;
    var f1=v=>v;
    var f=function(v){
        return v;
    }

    console.log(f1(1));
    console.log(f(10));

    var h1=()=>10;
    var h=function(){return 10;}
    console.log(h1());
    console.log(h());

    var g1=(n1,n2)=>n1+n2;
    var g=function(n1,n2){
        return n1+n2;
    }

    console.log(g1(1,2));
    console.log(g(1,2));

    var sum=(n1,n2)=>{var n=n1+n2;return n;}
    console.log(sum(4,5));

    //返回对像：加大括号
    var obj=id=>({id:id,name:'Temp'});
    console.log(obj(23));

    //可以解构赋值
    var person=({first,last})=>first+''+last;
    console.log(person({first:"xiao",last:'ming'}));

    console.log([1,2,3].map(function(x){return x*x;}));
    console.log([1,2,3].map(x=>x*x));