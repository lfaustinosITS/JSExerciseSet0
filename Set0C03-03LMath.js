class LMath {
    add(...args) {
        if (args.length == 0){
            return 0;
        }
        let sum=0;
        args.forEach((number)=>sum+=number)
        
        return sum}
    mult(...args){
        if (args.length == 0){
            return 0;
        }
        let multi=1;
        args.forEach((number)=>multi*=number)
        return multi
    }
    fact(number){
        let multi=1;
        for(let i=1;i<(number+1);i++){
            multi *= i;
        }
        return multi

    }
}
const Leonardo = new LMath();
console.log(Leonardo.mult(1,2,3,4),Leonardo.fact(5),Leonardo.mult(),Leonardo.add());
