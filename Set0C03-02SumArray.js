const sumArray=function(...args){
    let sum = 0;
    args.forEach((number)=>sum+=number)
    return sum;
}

console.log(sumArray(1,2,3)+sumArray(5,6,7,8));