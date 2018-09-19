function shoppingCar(typePaella){ 
    this.typePaella = typePaella;
    var arrayElements = [];
/*
    this.compositeProto = function()
    {
        var objetComposite = {

            add: function(product){
                arrayElements.push(product);

                return arrayElements;
            },

            remove: function (product){

                arrayElements.split(0, this.arrayElements.length);
                arrayElements.add(product);

                return arrayElements;
            }

        } 
        return objetComposite;
    }*/
}

shoppingCar.prototype = {
     add: function(product){
        console.log(arrayElements);
        arrayElements.push(product);

        },

        remove: function (product){

            arrayElements.split(0, this.arrayElements.length);
            arrayElements.add(product);
            return arrayElements;
     
        }
    
}


function buildShoppingCar(typeProduct, product){//tipo de producto, producto){
/*
    var car = new shoppingCar(typeProduct);
    var resultCar = car.compositeProto().add(product);

    return resultCar;*/

    var car = new shoppingCar(typeProduct);

    for(var i =0;i <= product.length; i++){

        car.add(product[i])
    }

    return car;
}

