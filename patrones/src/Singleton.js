/*Se construye el objeto singleton que sera instanciado 
una unica vez, y podra ser utilizado en todos los platos 
de paella generados*/

var singleton = (function (){

	function productOnly(ingredients){

		var objectSalad = {
			salad: this.ingredients,/// salad es una llave, funciona como una estructura de dato diccionario
		}
		//return objectSalad;

	}

	function createSalad(){

		var saladIngredients = [];
		return new productOnly();
	}

	function instanceSingle(){
		instance = createSalad();
	}

	return instance;
})();

function executeSingleton(){

	return singleton;
}