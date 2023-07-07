const RecursiveSum = function(array,n=array.length){
    let k=0;
    if (n==1){
    return array[0];
    }
    else{
        k = array[n-1]+RecursiveSum(array,n-1);   
    }
    
    return k;
}

console.log(RecursiveSum([10,3,5,7,10]));