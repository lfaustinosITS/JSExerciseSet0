const RecursiveSum = function(array){
    if (array.length == 1){
    return array[0];
    }
    else{
        let k = array[0]+array[1];
        array.shift();
        array.shift();
        array.push(k)
        return RecursiveSum(array);
    }
}
console.log(RecursiveSum([1,3,5,7]));