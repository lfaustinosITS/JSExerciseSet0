const Fibonacci = function(num){
    if (num == 0){
        return 1;
    }
    else if (num == 1){ 
        return 1;
    }
    else  {
        return Fibonacci(num-1) + Fibonacci(num -2);
    }

}
console.log(Fibonacci(5));