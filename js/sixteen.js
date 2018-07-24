/*
*   Class：提供了更接近传统语言的写法，引入了class作为对象的模板，通过class关键字，可以定义类，基本上，ES6的class可以看做是一个语法糖，
*
*
*
*
*/

class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    toString(){
        return '('+this.x+', '+this.y+')';
    }

    sayPoint(){
        console.log('x:'+this.x+'y:'+this.y);
    }
}

console.log(typeof Point);
console.log(Point === Point.prototype.constructor);

var a=new Point();
console.log(a);

class Bar{
    constructor(){

    }
    doStuff(){
        console.log('stuff');
    }
}

var b=new Bar();
b.doStuff();

//向类添加方法
Object.assign(Bar.prototype,{
    toString(){
        console.log('hello world');
    }
})

b.toString();

//立即执行类的实例
var person=new class{
    constructor(name){
        this.name=name;
    }

    sayName(){
        console.log(this.name);
    }

}('张三');

person.sayName();

//私有方法
class Widget{
    constructor(name){
        this.name=name;
    }

    //公有方法
    foo(baz){
        this._bar(baz);
    }

    //私有方法
    _bar(baz){
        return this.snaf=baz;
    }

}

//类的继承 
class A extends Bar{
    constructor(){
        super();
    }
    toSay(){
        console.log("我是hhh");
    }
}

var a=new A();
a.toSay();
