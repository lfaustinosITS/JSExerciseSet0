const hexToRGB=function(String){
    let expres= /^#[0-9,a,b,c,d,e,f]{6}$/i;
    if (expres.test(String)){
        String=String.substring(1);
        console.log(String);
        let pairs= []
        for (i=0;i<6;i+=2){
            let j=i;
            let pair = String.substring(j,j+=2);
            let hex = parseInt(pair,16);
            pairs.push(hex);

        }
        return console.log('rgb ('+pairs[0]+','+ pairs[1]+','+pairs[2]+')')
    }
    return console.log('This is not a valid expression')

}

hexToRGB('#3020ff');
hexToRGB('#3020fg');
hexToRGB('#302fg');
hexToRGB('#3020ff1');