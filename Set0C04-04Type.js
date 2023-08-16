const dataType = function(...inputs){
    let types=[];
    inputs.forEach((input)=>{
    if (Number.isInteger(input)){
        types.push('number');
    } else if (typeof input === 'number'){
        types.push('float');
    }else if (Array.isArray(input)){
        types.push('array');
    }else{
    types.push(typeof input)}})
    console.log(types.join(','));

}

dataType (1, 6.2831, 'pi*2', [function(){}, 1], {}, function () {});//number,float,string,array,object,function