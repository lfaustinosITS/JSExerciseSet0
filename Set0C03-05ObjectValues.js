"use strict"

const ObjectProp=function(obj,onlyObjectInstances = false){
    let properties=[];
    for (let prop in obj){
        if (onlyObjectInstances == true && !obj.hasOwnProperty(prop)){
            continue;
        }else {
            properties.push(prop);
        }
    }
    console.log(properties.join(','));
}

function CustomObject (a, b) {
    this.a = a;
    this.b = b;
}
CustomObject.prototype.c = function () { return this.a + this.b; };
    var obj = new CustomObject (1, 2);

ObjectProp (obj); // output: a, b, c
ObjectProp (obj, false); // output: a, b, c
ObjectProp (obj, true); // output: a, b