const Fibonacci = function(num){
    if (num == 0 || num == 1){
        return 1;
    }
    else  {
        return Fibonacci(num-1) + Fibonacci(num -2);
    }

}
console.log(Fibonacci(5), Fibonacci(1), Fibonacci(0));