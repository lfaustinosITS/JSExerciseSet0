const A = function() {
    console.log("A half of minute.");
  }
  
const  B = function() {
    console.log("Be a bee.");
  }
  
const C = function() {
    console.log("Call me when you need me.");
  }
  
const executeFunctions = function() {
    let elapsedTime = 0;
    setInterval(() => {
      elapsedTime += 1000;
  
      if (elapsedTime % 30000 === 0) {
        A();
      }
  
      if (elapsedTime % 60000 === 0) {
        B();
      }
  
      if (elapsedTime % 75000 === 0) {
        C();
      }
    }, 1000);
  }
  

  executeFunctions();
  