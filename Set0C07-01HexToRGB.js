const hexToRGB = function (hexExpression) {
    const regex = /#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i;

    if (regex.test(hexExpression)) {
        const match = regex.exec(hexExpression);
        let pairs = []
        for (let i = 0; i < 4; i++) {
            let rgb = parseInt(match[i + 1], 16);
            pairs.push(rgb)
        }
        return 'rgb (' + pairs[0] + ',' + pairs[1] + ',' + pairs[2] + ')';
    }
    throw new Error("This is not a valid expression");

}

console.log(hexToRGB('#3020ff'));//rgb (48,32,255)
console.log(hexToRGB('#3020,g'));//Uncaught Error Error: This is not a valid expression
console.log(hexToRGB('#302fg'));//Uncaught Error Error: This is not a valid expression
console.log(hexToRGB('#3020ff1'));//Uncaught Error Error: This is not a valid expression