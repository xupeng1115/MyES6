/*
    *   变量解构赋值
    *   允许按照一定的模式规则从数组和对象中提取数据，按照对应位置，给变量重新赋值，称为解构。
    *   属于模式匹配，两边模式一直，进行赋值操作。
    *   如果不是数组或或对象将报错
    *   Set结构的数据也可以使用解构赋值
    *   
    */

   let [a,b,c]=[1,2,3];
   let [foo,[[bar],[cal]],ko]=[222,[[444],[666]],999];
   let [,,third]=[1,2,3];    
   let [aa,,cc]=[1,2,34];
   //...foot是截取了头部元素的一个数组
   let [head,...foot]=[11,22,3,3,44,55,666];
   let [uuu,ooo,kkk,...hhh]=[1,2];
   //也可以使用var 
   var [ppp,eee]=[111,222];
   //也可以使用const
   const [yyy,ttt]=[444,555];
   const [pp,tt]=[33,];

   let [r,[n],m]=[1,[2,3],0];
   //如果不是数组将报错
   // let [j]=1;
   // let [jh]=true;
   // let [hj]=undefined;
   // let [hg]={};
   // let [kj]=null;
   // let [kl]=NaN;

   //Set结构使用解构赋值
   let oSet=new Set([1,2,3]);
   let [sd]=new Set(['a','b','c']);
   
   //生成器函数
   function* fibs() {
       let a = 0;
       let b = 1;
       while (true) {
           yield a;
           [a, b] = [b, a + b];
       }
   }

   let [fi, se, td, fo, fv, si] = fibs();
   
   //允许默认值
   let [uy=true]=[];
   let [ui=false]=[true];
   let [gy,yg='b']=['a',undefined];
   let [kl=1]=[null];

   function vf(){
       return 44;
   }

   //只有没有值得时候才会执行vf();
   let [df=vf()]=[11113333];
   let [er=vf()]=[];

   //默认值可以使用其他变量,但是变量必须已经声明过才行；
   let [we=df]=[];
   // let [rt=op,op=1]=[];


   //用于对象的解构赋值,对像的属性没有顺序。
   let {bn,nb}={bn:"xiaoming",nb:"AB"};
   let {cf,fc}={cf:"title"};
   let {xd,dx,xxd}={dx:"xiaoming",xd:"HEHE"};

   //变量名和属性名不一致时
   let {az:za}={az:100};

   let obj1={ffg:"llll",ggf:"tttt"};
   let {ffg:kkl,ggf:jjjh}=obj1;

   //对象赋值的实质是先找到同名的属性然后在找到同名的属性名，将属性值赋值给属性的属性值；
   let {ddg:ddg}={ddg:"小明"};

   //也可以使用嵌套结构
   let obj3={
       poi:[
           'Hello',
           {ykl:'World'}
       ]
   };

   let {poi,poi:[oip,ykl]}=obj3;

   //也可以指定默认值,默认值生效的条件是
   let {uuo=111}={};
   let {eer:ttr="AB"}={};

   //避免将解构赋值的大括号给写在行首，可以放在一个括号内；
   let gghh;
   ({gghh}={gghh:"小明"});

   //也可以将数组的值进行结构赋值
   let arr1=[1,2,3,4,5];
   let {0:eq1,[arr1.length-1]:eq4}=arr1;

   //字符串也可以解构赋值
   const [m1,m2,m3,m4]='hello';
   //类数组对象有length属性
   const {length:len}='hello';
   
   //数字和布尔值的解构赋值:先转化为对象，然后将toString属性赋值给变量使用，null,和undefined没有toString属性所以不能进行解构赋值
   let {toString:boor}=true;
   let {toString:booor}=232;

   //函数参数的解构赋值
   function add([x,y]){
       return x+y;
   }

   console.log(add([1,4]));
   console.log([[1,3],[3,5]].map(([x,y])=>x+y));

   //函数的解构赋值也可以使用默认值
   function dicuse([x=100,y=1000]){
       return x+y;
   }
   console.log(dicuse([1,2]));
   console.log(dicuse([]));

   console.log(dicuse([1,2]));
   console.log(dicuse([1,2,3,4]));

   //圆括号问题：在模式里尽量不使用圆括号；
   //变量声明语句不能使用圆括号；
   //函数参数不能使用圆括号；
   //赋值语句模式不能使用圆括号；
   //赋值语句的非模式部分可以使用圆括号；

   //交换变量值
   let kop=10;
   let pok=100;
   [kop,pok]=[pok,kop];

   //接收多个变量值
   function getValue(){
       return [1,2,3];
   }

   let [gtt,tgg,rgg]=getValue();

   //提取json值
   var jsonData={
       id:"xiaoming",
       stuts:"OK",
       data:[867,9999]
   }

   let {id,data,stuts}=jsonData;
   
   //函数定义默认值
   jQuery.ajax=function(url,{
       async = true,
       beforeSend = function () {},
       cache = true,
       complete = function () {},
       crossDomain = false,
       global = true, 
   }={}){
       console.log("heeee");
   };

   //遍历map结构
   const map=new Map();
   map.set('first','second');
   console.log(map);

   for(let [key,value] of map){
       console.log(key+ " is "+value);
   }

   for(let [key] of map){
       console.log(key);
   }

   for(let [,value] of map){
       console.log(value);
   }

   //输入模块的指定方法
   // const {obj4,obj5}=require("source-map");