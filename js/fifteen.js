/*
*   传统异步编程：
*       1.回掉函数，2.事件监听，3.发布\订阅，4.Promise对象
*   ES6:将异步编程带入一个全新的阶段，ES7的async函数更是提出了异步编程的终极解决方案。
*   异步：将一个任务分成两段，先执行第一段，然后执行其他任务，等做好了准备，再回头执行第二段。
*
*
*/

//async函数：Generator函数的语法糖
//async函数返回一个promise对象，async函数内部return语句返回的值，会成为then方法回调函数的参数。
async function f(){
    return 'hello world';
}

f().then(v=>console.log(v));

//async函数必须等到内部所有的await命令的promise对象执行完，才会发生状态改变，只有async函数内部异步操作执行完，才会改变状态。
async function getTitle(url){
    var response = await fetch(url);
    var html=await response.text();
    return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}





