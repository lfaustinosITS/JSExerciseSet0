const dataType = function(...inputs){
    types=[];
    for (let input of inputs){
        types.push(typeof input);

    }
    console.log(types.join(','));

}

dataType (1, 6.2831, 'pi*2', [function(){}, 1], {}, function () {});