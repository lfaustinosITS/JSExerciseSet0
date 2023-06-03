class OnlyNumber{
    constructor(){
        let onumber = '';
        Object.defineProperty(this, 'onumber', {
            get() {
              return onumber;
            },
            set(value) {
              if (typeof value === 'number') {
                onumber = value;
              } else {
                throw new Error('Error: This is not a number');
              }
            },
            enumerable: true,
            configurable: true
          }); 
    }
}

const obj = new OnlyNumber();
console.log(obj.onumber);
obj.onumber = 123;
console.log(obj.onumber);
obj.onumber = [1,2,3];