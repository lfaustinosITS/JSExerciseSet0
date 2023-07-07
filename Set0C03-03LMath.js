class LMath {
    add(...array) {
        if (array[0].length == 0){
            return "void";
        }
        let sum=0;
        for(let x of array){
            for(let y of x)
            sum += y;
        }
        return sum}
    mult(...array){
        if (array[0].length == 0){
            return "void";
        }
        let multi=1;
        for(let x of array){
            for(let y of x)
            multi *= y;
        }
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
console.log(Leonardo.mult([1,2,3],[6],[2,3]),Leonardo.fact(5),Leonardo.mult([]),Leonardo.add([]));
