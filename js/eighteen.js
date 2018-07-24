/*
*   module:完全可以取代现有的commonjs和AMD规范，成为浏览器和服务器通用的模块解决方案。
*   思想：
*       尽量静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量，commonjs和AMD模块，都只能运行时确定这些东西，比如，commonjs模块就是对象，输入时必须查找对象属性。
*
*
*/

//静态加载，编译时加载；
//主要有两个命令组成：export和import，
//export:用于规定模块的对外接口，import命令用于输入其他模块提供的功能；一个模块就是一个独立文件

export var firstName='Michael';
export var lastName='Jackson';

var name="xiaoming";
var age="30";
export {name,lage};

export function mmm(){

}

export {
    
}




