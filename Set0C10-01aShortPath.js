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

with(myLib.math.complex){
  cone=Num(2,3);
  ctwo=Num(1,-1);
  console.log(add(cone,ctwo));
  console.log(sub(cone,ctwo));
  console.log(mul(cone,ctwo));
}

with(myLib.math.matrix){
  mone=[[1,2],[3,4]];
  mtwo=[[-1,1],[2,-2]];
  console.log(JSON.stringify(add(mone,mtwo)));
  console.log(JSON.stringify(sub(mone,mtwo)));
  console.log(JSON.stringify(mul(mone,mtwo)));
  console.log(JSON.stringify(eye(3)));
  console.log(JSON.stringify(dot(4,mtwo)));
  console.log(JSON.stringify(times(mone,mtwo)));
}

with (myLib.math.real) {
  answer = sub(add(20, 22), mul(2, 5));
  console.log(answer);
}

with(myLib.math){
  matrix.times(
    matrix.eye(4),
    complex.sub(
      new complex.Num(
        real.add(5,3),-3)),
      new complex.Num(3,4));
}/*This gives an error beacause the times product is only for matrix of the same size*/