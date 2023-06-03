const distance=function(...coord){
    if (coord.every(element => typeof element === 'number')){
        if (coord.length%2 == 0){
            let square = 0;
            for (let i=0;i<coord.length/2;i++){
                let k = (coord[i]-coord[coord.length/2+i])**2;
                square += k;
            }
            return Math.sqrt(square);
        }
        else { return 'Error: Insufficient parameters';}

    }
    else if (coord.every(element => element.length == coord[0].length)) {
        let square= 0;
        for (let i=0;i<coord[0].length;i++){
            k=(coord[0][i]-coord[1][i])**2;
            square += k;
        }
        return Math.sqrt(square)
    }
    
    else {
        return 'Error: Incompatible point data';
      }
    
}

console.log(distance(1,1,3,3));
console.log(distance(1,1,3,3,6));
console.log(distance ([1,2], [2,2]));
console.log(distance ([1,2,3], [3,5,9]));
console.log(distance ([1,2,3], [3,5]));
console.log(distance([1,1,1,1],[4,1,3,7]));