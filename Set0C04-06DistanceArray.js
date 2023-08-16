const distance = function (...coord) {
    if (coord.every(element => element.length == coord[0].length)) {
        let flatCoord = coord.flat();
        if (flatCoord.length % 2 == 0 && flatCoord.length < 7 && flatCoord > 2) {
            let square = 0;
            for (let i = 0; i < flatCoord.length / 2; i++) {
                let k = (parseInt(flatCoord[i], 10) - parseInt(flatCoord[flatCoord.length / 2 + i], 10)) ** 2;
                square += k;
            }
            return Math.sqrt(square);
        }
        else { throw new Error("The number of parameters does not correspond to two points in 2D or 3D"); }
    }
    else {
        throw new Error("Incompatible point data");
    }

}

console.log(distance(1, 1));
console.log(distance(1, 1, 3, 3));
console.log(distance([1, 2], [2, 2]));
console.log(distance([1, 2, 3], [3, 5, 9]));
console.log(distance([1, 2, 3], [3, 5]));
console.log(distance(1, 1, 3, 3, 6));
console.log(distance([1, 1, 1, 1], [4, 1, 3, 7]));