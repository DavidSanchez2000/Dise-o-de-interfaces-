/*Se construye el objeto singleton que sera instanciado 
una unica vez, y podra ser utilizado en todos los platos 
de paella generados*/

var singleton = (function (){

	var instance;

	function productOnly(ingredients){

		var objectSalad = {
			salad: ingredients,/// salad es una llave, funciona como una estructura de dato diccionario
		}
		return objectSalad;

	}

	function createSalad(){

		var saladIngredients = ["lechuga","tomate","pina","jamon","crema de leche","mango"];

		return new productOnly(saladIngredients);
	}

	function instanceSingle(){
		instance = createSalad();

		return instance;
	}
	return instanceSingle();
	
})();

function executeSingleton(){
	var saladGenerate = singleton;
	return saladGenerate;
}
