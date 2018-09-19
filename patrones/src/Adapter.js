

function newCalculateDolar(dolar){
	var dolar1 = dolar.value  * 0.00033
	///console.log("Valor en dolar",dolar1);
	return dolar1;
}

function calculatePaellaPrice(paellaPrice){
	//this.paellaPrice = paellaPrice.value * 0.00033;
	//var paellaD =  newCalculateDolar(paellaPrice)
	var iva = paellaPrice.value * 0.09
	var ivaendolares = iva * 0.00028

	return ivaendolares;

}


function newCalculateEuro(Euro){
	var Euro1 = Euro.value  * 0.00028
	///console.log("Valor en dolar",dolar1);
	return Euro1;
}

function calculatePaellaPriceEuro(paellaPrice){
	//this.paellaPrice = paellaPrice.value * 0.00033;
	//var paellaD =  newCalculateDolar(paellaPrice)
	var iva = paellaPrice.value * 0.21
	var ivaeneuros = iva * 0.00028

	return ivaeneuros;

}

