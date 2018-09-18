<?php
	$entero = 10;
	$float = 12.34;
	$string = "clase HCI";
	$array = array("key1", "hola","key","mundo");
	$array2 = array("key1"=> "hola","key"=> "mundo");
	$verdadero = true;
	$falso = false;
	//

	class StrValTest{
		private $miVar = "clase 1";
		public $mivar2 = "clase 2";
		public  function to_string(){
			return __CLASS__;
		}

		public function example(){
			return "XD";
		}

	}

	echo "entero ".intval($entero). "<br />";
	echo "float ".intval($float). "<br />";
	echo "string ".intval($string). "<br />";
	echo "booolean verdadero" .intval($verdadero)."<br />";
	echo "boolean falso " .intval($falso)."<br />";

	echo "hex-dex " .intval(0x165) ."<br />";
	echo "float string". strval($float)."<br />";
	$floatstring = strval($float);
	echo "type float" .gettype($floatstring)."<br />";
	echo "falso string " =.strval($falso)."<br />";
	echo "boolean verdadero" = .strval($verdadero) ."<br />";

	echo "int arreglo" .(int)$array."<br />";
	echo "int arreglo2" .(int)$array2 ."<br />";

	var_dump((array)new strValTest)


?>