class ImageMock{
    constructor(array,width,heigth,name){
        this.array = array;
        this.width = width;
        this.heigth = heigth;
        this.name = name;
    }
    getPixel(x,y){
        let n = y*(this.width-1) + x;
        return this.array[n];

    }
}
/*Function to make a random example*/
const Image = function(num){
    let array = [];
    for(let i =0; i<num;i++){
        let index = Math.floor(Math.random()*3);
        let color = "";
        if (index == 0){
            color = "R";
        }
        else if (index == 1){
            color = "G";
        }
        else {
            color = "B";
        }
        array.push(color);
    } return array;
}
let array1=Image(1600);
Leo = new ImageMock(array1,40,40,"prueba");
console.log(Leo.getPixel(20,4),Leo.getPixel(1,3));