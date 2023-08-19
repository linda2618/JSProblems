//将arguments转换成数组


//1.Array.prototype.slice.call()
function sum1(a, b){
    let args = Array.prototype.slice.call(arguments)
    console.log(args.reduce((sum, cur) => sum + cur))  //args可以调用数组原生的方法啦
}


//2.Array.from()
function sum2(a, b){
    let args = Array.from(arguments)
    console.log(args.reduce((sum, cur)=> sum + cur))  //args可以调用数组原生的方法啦
}    //此方法也可以用来转换Set和Map


//3.ES6展开运算符
function sum3(a, b){
    let args = [...arguments]
    console.log(args.reduce((sum, cur) => sum + cur))   //args可以调用数组原生的方法啦
}

//4.利用concat + apply
function sum(a, b){
    let args = Array.prototype.concat.apply([], arguments) //apply方法会把第二个参数展开
    console.log(args.reduce((sum, cur) => sum + cur))   //args可以调用数组原生的方法啦
}

// 当然，最原始的方法就是再创建一个数组，用for循环把类数组的每个属性值放在里面，
// 过于简单，就不 浪费篇幅了。