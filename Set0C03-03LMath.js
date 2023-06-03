class LMath {
    add(array) {
        let sum=0;
        for(let i=0;i<array.length;i++){
            sum += array[i];
        }
        return sum}
    mult(array){
        let multi=1;
        for(let i=0;i<array.length;i++){
            multi *= array[i];
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
console.log(Leonardo.mult([1,2,3]),Leonardo.fact(5));
