const myLib = {
	math: {
		real: {
			add: function (a, b){ return a+b},
			sub: function (a, b){ return a-b},
			mul: function (a, b){ return a*b}
		},
		complex: {
			Num: function (real, img){let z=[real,img]; return z;},
			add: function (a, b){
        let c=[]; 
        for (let i=0;i<2;i++){
          c.push(a[i]+b[i])
        } 
        return c},
			sub: function (a, b){
        let c=[]; 
        for (let i=0;i<2;i++){
          c.push(a[i]-b[i])
        } 
        return c},
			mul: function (a, b){
        let c=[a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]]; 
        return c}
              },
    matrix: {
	    add: function (a, b){
        let c=[];
        for (i=0;i<a.length;i++){
          let row =[];
          for(j=0;j<a.length;j++){
            row.push(a[i][j]+b[i][j])
          }; 
          c.push(row)}
        return c },
	    sub: function (a, b){
        let c=[];
        for (i=0;i<a.length;i++){
          let row =[];
          for(j=0;j<a.length;j++){
            row.push(a[i][j]-b[i][j])
          }; 
          c.push(row)}
        return c },
	    mul: function (a, b){
        let c=[]; 
        for(i=0;i<a.length;i++){
          let row=[]; 
          
          for(j=0;j<b[0].length;j++){
            let val=0;
            for(let w=0;w<b.length;w++){
              val+=a[i][w]*b[w][j];
            }
            row.push(val)
          };
          c.push(row)
        }; 
        return c },
	    eye: function (size){
        let c=[]; 
        for (let i = 0 ; i < size ; i++ ){
          let row =[];
          for(let j = 0; j < size ; j++ ){
            if (j === i){
              row.push(1);
            }
            else{
              row.push(0);
            }
          };
          c.push(row);
          };
          
        return c},
	    dot: function (m, a){
        let c=[]; 
        for (i=0;i<a.length;i++){
          let row =[];
          for(j=0;j<a.length;j++){
            row.push(m*a[i][j])
          }
        c.push(row);
        }; 
        return c },
	    times:function(a, b){
        let c=[]; 
        for (i=0;i<a.length;i++){
          let row =[];for(j=0;j<a.length;j++){
            row.push(a[i][j]*b[i][j])
          }; 
          c.push(row)}
          return c }
	       }
	
        }
      }


let answer;
let ans;

let real = myLib.math.real;
let complex = myLib.math.complex;
let matrix = myLib.math.matrix;

answer = real.sub(real.add(20, 22), real.mul(2, 5));
console.log(answer);

ans = matrix.times(matrix.eye(4), complex.sub(new complex.Num(real.add(5, 2), -3), new complex.Num(3, 4)));
/*This gives an error beacause the times product is only for matrix of the same size*/