/*Esta clase debe permitir construir una base para la paella, 
los ingredientes son arroz, sal, agua y aceite. Debe ser un clon exacto para
cada paella. Se debe considerar que si se cambia un elemento del clon, los ingredientes
originales deberán mantenerse.*/



function ricePrototype(proto){
	this.proto = proto;
	this.clone = function(){	
		/*
		var arroz = rice.ingredientes;
		arroz = proto.ingredientes;*/
		var arroz = new rice([]);
		for(var i = 0; i < proto.ingredientes.length; i++){
			arroz.ingredientes.push(proto.ingredientes[i]);
		}
		return arroz;
	}
}	

function rice(ingredientes){
	this.ingredientes = ingredientes;
	
}

function produceBase(){
	var proto = new rice(["arroz", "sal", "agua","aceite"])
	var Prototype = new ricePrototype(proto);
	var arroz = Prototype.clone();  
	arroz.ingredientes[0] = "arroz integral"
	return arroz;
}


