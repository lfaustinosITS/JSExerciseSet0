const dataParse = function(String){
    
    return eval(`(${str})`);
}

var str = '{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}'

var abj = dataParse(str);
console.log(typeof abj);
console.log(abj.prop1); // Output: 42
console.log(abj.myFn(10, 20)); // Output: 72
