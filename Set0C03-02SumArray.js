const sumArray=function(array){
    let sum=0;
    for(let x of array){
        sum += x;
    }
    return sum;
}

console.log(sumArray([1,4,3,5,6,7])+ sumArray([3,4,5]))