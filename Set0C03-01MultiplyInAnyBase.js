const MultiplyInBase = function(num1,num2,base = 13 ){
    let mult = num1*num2;
    let result="";
    for (let i =0;mult>=1; i++){
        let qu1 = mult%base;
        result += qu1.toString(base);
        mult=Math.floor(mult/base);
    }
    let result1=result.split("").reverse().join("")
    let message=`The result of multiplyng ${num1} by ${num2} in base ${base} is ${result1}`
    return message;

}

const MultiplyInBaseJS = function(num1,num2,base = 13){
    return((num1*num2).toString(base));
} 
console.log(MultiplyInBase(6,9,13));
console.log(MultiplyInBaseJS(6,9));
console.log(MultiplyInBase(14,24,13));
console.log(MultiplyInBaseJS(14,24,13));
console.log(MultiplyInBase(14,24,16));
console.log(MultiplyInBaseJS(14,24,16))