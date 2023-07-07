const hexToRGB=function(hexExpression){
    let expres= /^#[0-9a-f]{6}$/i;
    if (expres.test(hexExpression)){
        hexExpression = hexExpression.substring(1);
        let pairs= []
        for (i=0;i<6;i+=2){
            let j=i;
            let pair = hexExpression.substring(j,j+=2);
            let rgb = parseInt(pair,16);
            pairs.push(rgb);

        }
        return 'rgb ('+pairs[0]+','+ pairs[1]+','+pairs[2]+')';
    }
    throw new Error("This is not a valid expression");

}

console.log(hexToRGB('#3020ff'));
console.log(hexToRGB('#3020,g'));
console.log(hexToRGB('#302fg'));
console.log(hexToRGB('#3020ff1'));