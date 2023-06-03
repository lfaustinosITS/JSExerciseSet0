const distance=function(...coord){
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

console.log(distance(1,1,4,5));
console.log(distance(1,1,3,3,6));
console.log(distance(1,1,1,3,4,7));
console.log(distance(1,1,1,1,3,1,4,7));
