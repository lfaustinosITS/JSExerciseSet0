class Shape {
    constructor(numofEdges) {
      this.numofEdges = numofEdges;
    }
  
    fnDisplay() {
      console.log(`Number of edges: ${this.numofEdges}`);
    }
  }
  
  class Quadrilateral extends Shape {
    constructor() {
      super(4);
    }
  
    fnArea() {
      console.log("The area of Quadrilateral is ...");
      
    }
  
    fnPerimeter() {
      console.log("The perimeter of Quadrilateral is ...");
      
    }
  }
  
  class Square extends Quadrilateral {
    constructor() {
      super(4);
    }
    fnProperty(){
      console.log("All its edges are equals")
    }
  }
  
  class Triangle extends Shape {
    constructor() {
      super(3);
    }
  
    fnArea() {
      console.log("The area of the Triangle is ...");
      
    }
  
    fnPerimeter() {
      console.log("The perimeter of the Triangle is ...");
      
    }
  }
  
  
  const square = new Square();
  square.fnDisplay(); 
  square.fnArea(); 
  square.fnPerimeter();
  square.fnProperty(); 
  
  const triangle = new Triangle();
  triangle.fnDisplay(); 
  triangle.fnArea(); 
  triangle.fnPerimeter(); 
  