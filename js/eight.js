/*
    *   Array
    *
    */
    //直接写入变量和函数，作为对象的属性动画方法，
    var foo='bar';
    var baz={foo};
    console.log(baz);
    console.log(function(x,y){return {x,y}});

    function f(a,b){
        return {a,b}
    }

    console.log(f('xiao','ming'));

    var o={
        method(){
            return 'Hello!';
        }
    };

    var birth='2000/01/01';
    var Person={
        name:'张三',
        birth,
        hello(){
            console.log('我的名字是',this.name);
        }
    }

    function getPoint(){
        var x=1;
        var y=10;
        return {x,y};
    }

    console.log(getPoint());

    var ms={};
    function getItem(key){
        return key in ms ? ms[key] : null;
    }

    function setItem(key,value){
        ms[key]=value;
    }

    function clear(){
        ms={};
    }

    // module.exports={
    //     getItem:getItem,
    //     setItem:setItem,
    //     clear:clear
    // };

    var cart = {
        _wheels: 4,
      
        get wheels () {
          return this._wheels;
        },
      
        set wheels (value) {
          if (value < this._wheels) {
            throw new Error('数值太小了！');
          }
          this._wheels = value;
        }
    }

    var obj={
        'class'(){}
    }
    console.log(obj);

    var obj={
        *m(){
            yield 'hello world';
        }
    }
    console.log(obj.m);

    //字面量直接作为属性
    var propKey='foo';
    var obj={
        [propKey]:true,
        ['a'+'bc']:123
    }

    var lastWord='last word';
    var a={
        'first word':'hello',
        [lastWord]:'world'
    };
    //作为方法名
    var obj={
        ['h'+'ello'](){
            return 'hi';
        }
    }
    
    var keyA={a:1};
    var keyB={b:2};

    //keyB将keyA覆盖掉了
    var myObject={
        [keyA]:'valueA',
        [keyB]:'valueB'
    }

    var person={
        sayName(){
            console.log(this.name);
        },
        get firstName(){
            return 'Nicholas';
        }
    }

    //bind方法创造的函数，name属性返回bound加上原函数名字，Function构造函数创造的函数，name属性返回anonymous
    console.log((new Function()).name);
    var doSomething=function(){

    };
    console.log(typeof doSomething.bind());
    console.log(doSomething.bind().name);

    //如果对象的方法是一个Symbol值，那么name属性返回的是这个Symbol值的描述
    var key1=Symbol('description');

    var key2=Symbol();
    var obj={
        [key1](){},
        [key2](){}
    }

    //相等方法：Object.is()，和===行为一致
    console.log(Object.is('foo','foo'));
    console.log(Object.is({},{}));

    //Object.assign()方法用于对象的合并，将源对象(source)的所有可枚举属性复制到目标对象，如果有同名属性，后面的属性会覆盖前面的属性
    var target={a:1,b:7};
    var source1={a:10,b:2};
    var source2={c:3};
    Object.assign(target,source1,source2);
    console.log(target);

    //undefined和null无法转成对象，会报错
    // console.log(Object.assign(null));
    // console.log(Object.assign(undefined));

    //Object.assign是浅拷贝，不是深拷贝是引用
    var obj1={a:{b:1}};
    var obj2=Object.assign({},obj1);

    //对于嵌套对象，遇到同名属性，是替换（整个替换），不是添加
    var target={a:{b:'c',d:'e'}};
    var source={a:{b:'hello'}};
    var result=Object.assign(source,target);

    //也可以处理数组，但是会处理成对象,覆盖相同属性
    var arr=Object.assign([1,2,3],[4,5]);

    //常用添加属性和方法
    class Point{
        constructor(x,y){
            Object.assign(this,{x,y});
        }
    }
    
    var p=new Point(1,2);
    //添加属性
    Object.assign(Point.prototype,{
        format(a,b){
            return a+b;
        }
    })

    //clone对象
    function clone(origin){
        return Object.assign({},origin);
    }

    var obj={a:1,b:2};
    console.log(clone(obj));

    //合并对个对象
    var merge=(a,b,c)=>Object.assign({},a,b,c);
    console.log(merge({a:1},{b:2},{c:3}));

    var obj={a:1,b:2};
    Object.prototype.c=1000000000;
    Object.prototype.format=function(){
        return 10000;
    }

    //for in 包含自身的属性和继承的可枚举的属性
    for(var i in obj){
        console.log(obj[i]);
    }

    //Object.keys():返回一个数组，包含对象自身的所有可枚举属性，不含继承的属性
    console.log(Object.keys(obj));

    //Object.getOwnProertyNames(obj):返回一个数组，包含所有属性
    console.log(Object.getOwnPropertyNames(obj));

    //Object.getOwnProertyNames(obj):包含对象自身的所有Symbol属性
    console.log(Object.getOwnPropertySymbols(obj));

    //Reflect.ownKeys(obj):包含对象所有的属性
    //首先遍历所有属性名为数值的属性，按照数字排序。
    //其次遍历所有属性名为字符串的属性，按照生成时间排序。
    //最后遍历所有属性名为Symbol值的属性，按照生成时间排序。
    console.log(Reflect.ownKeys({[Symbol()]:0,b:0,10:0,2:0,a:0}));

    var proto={};
    var obj={x:1};

    Object.setPrototypeOf(obj,proto);
    proto.y=20;
    proto.z=40;

    console.log(obj.x);
    console.log(obj.z);
    console.log(obj.y);

    console.log(Object.getPrototypeOf(obj));

    var obj={foo:'bar',baz:42};
    console.log(Object.keys(obj));

    for(var key of Object.keys(obj)){
        console.log(key);
    }
    console.log(Object.values(obj));
    console.log(Object.entries(obj));
    
    console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
    console.log(Object.getOwnPropertyDescriptors(obj));

    //super关键字：指向当前对象的原型对象,只能用在子类的方法中，用在其他地方报错
    var proto={
        foo:'hello'
    };

    var obj={
        foo:'world',
        find(){
            return super.foo;
        }
    };

    Object.setPrototypeOf(obj,proto);
    console.log(obj.find());


    


    

