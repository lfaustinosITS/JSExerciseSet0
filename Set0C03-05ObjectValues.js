const ObjectProp=function(obj,bol = false){
    properties=[];
    if (bol == true){
        for (prop in obj){
            if (obj.hasOwnProperty(prop)){
                properties.push(prop);
            }

        }
    }
    else {
        for (prop in obj){
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