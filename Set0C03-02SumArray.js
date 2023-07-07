const sumArray=function(...array){
    let sum=0;
    for(let x of array){
        for (let y of x)
        sum += y;
    }
    return sum;
}

console.log(sumArray([1,4,3,5,6,7],[3,4,5]));