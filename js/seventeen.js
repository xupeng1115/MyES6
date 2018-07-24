/*
*   修饰器：是一个函数，对类的行为的改变，是代码编译发生的，不是在运行时，不仅可以修饰类，还可以修饰类的属性，
*   
*
*
*/

function testable(target){
    target.isTestable=true;
}

// @testable
// class MyTestableClass {}

// console.log(MyTestableClass.isTestable);



