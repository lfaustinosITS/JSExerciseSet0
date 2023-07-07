class FourDimVector{
    constructor(x,y,z,w){
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;

    }
    dotProduct(a,b,c=0,d=0){
        return this.x*a+this.y*b+this.z*c+this.w*d;
    }
    
    vectorLength(a=this.x,b=this.y,c=this.z,d=this.w){
        return Math.sqrt(a**2+b**2+c**2+d**2);
    }
    distance(a,b,c=0,d=0){
        return this.vectorLength((this.x)-a,(this.y)-b,(this.z)-c,(this.w)-d);

    }
    areaBetween(a,b,c=0,d=0){
        return Math.sqrt((this.vectorLength()**2)*(this.vectorLength(a,b,c,d)**2)-this.dotProduct(a,b,c,d)**2)
    }

}

class ThreeDimVector extends FourDimVector{
    constructor(x,y,z){
        super(x,y,z,0);
    }
    crossProduct(a,b,c){
        return new ThreeDimVector(this.y*c-this.z*b,this.z*a-this.x*c,this.x*b-this.y*a);
    }
}    
class TwoDimVector extends FourDimVector{
    constructor(x,y){
        super(x,y,0,0);
    }
    orthogonal(){
        return new TwoDimVector(-this.y,this.x)
    }

}


const vefour = new FourDimVector(1,2,3,4);
console.log(vefour.vectorLength());
console.log(vefour.dotProduct(1,4,6,10));
console.log(vefour.distance(1,4,6,10));
console.log(vefour.areaBetween(1,4,-3,7))
const vethree = new ThreeDimVector(2,3,6);
console.log(vethree.vectorLength());
console.log(vethree.dotProduct(3,-6,2));
console.log(vethree.distance(3,-6,2));
console.log(vethree.areaBetween(3,-6,2))
console.log(vethree.crossProduct(3,-6,2));
const vetwo = new TwoDimVector(3,4); 
console.log(vetwo.vectorLength());
console.log(vetwo.dotProduct(4,-3));
console.log(vetwo.distance(4,-3));
console.log(vetwo.areaBetween(4,-3))
console.log(vetwo.orthogonal());