/*
    *   Array
    *  
    * 
    */

    //将两类对象转换为数组：Array.from() ,接受第二个参数用来处理数组
    var obj={
        '0':'a',
        '1':'b',
        '2':'c',
        length:3
    };

    var arr1=[].slice.call(obj);
    console.log(arr1);

    var arr2=Array.from(obj);
    console.log(arr2);

    var ps=document.querySelectorAll('p');
    Array.from(ps).forEach(function(p){
        console.log(p);
    })

    //作用和map函数一样
    console.log(Array.from(obj,x=>x+'&&&'));
    //将字符串转换为数组
    console.log(Array.from('abcdef'));

    //将一组值转换为数组
    console.log(Array.of(3,233,3434));

    //数组实例的copyWithin()：在数组内部，将制定位置的成员复制到其他位置，返回当前数组
    //Array.prototype.copyWithin(target,start=0,end=this.lenth);    //target:替换数据的开始的位置，start:读取数据，默认0，可为负数，end:停止读取数据位置，默认数据长度，可为负值;
    console.log([1,2,3,4,5,6].copyWithin(0,3));
    console.log([1,2,3,4,5,6].copyWithin(0,2,4));

    //数组实例的find（）方法和findIndex():参数是一个回调函数，返回符合条件的第一个成员。
    console.log([1,4,-5,19].find((n)=>n<0));

    console.log([1, 5, 10, 15].find(function(value, index, arr) {
        return value > 9;
    }))

    console.log([1, 5, 10, 15].findIndex(function(value, index, arr) {
        return value > 9;
    }))

    //填充：fill()，可以有起始位置和结束位置
    console.log(['a','b','c'].fill(7));
    console.log(['a','b','c'].fill(7,1,2));

    //遍历数组：entries()对键值对遍历，keys()对键名遍历，values()对键值遍历
    console.log(['a','b','c'].keys(7));
    
    for(let index of ['a','b'].keys()){
        console.log(index);
    }
    // for(let index of ['a','b'].values()){
    //     console.log(index);
    // }
    for(let [index,el] of ['a','b'].entries()){
        console.log(index,el);
    }

    console.log(['a','b','c'].entries().next().value);

    //Array.prototype.inclueds()返回一个布尔值,是否包含给定的值
    console.log([1,2,3].includes(2));
    // console.log([{"name":"xiaoming"},{"title":"work"},{"age":"40"}].includess({"name":"xiaoming"}));

    console.log(0 in [undefined,undefined,undefined,undefined]);