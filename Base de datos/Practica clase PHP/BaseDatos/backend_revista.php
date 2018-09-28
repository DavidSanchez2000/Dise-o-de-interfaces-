<?php
	

	require_once './conexion_bd.php';
	
	// capturar información del formulario de busqueda
	if(isset($_GET['search'])){
		$obj = $_GET['search'];
		$observerClass  = new Observer();
		$observerClass->getUser($mysqli, $obj);
	}

	class Observer{

		function getUser($mysqli, $obj){

		$queryRevista = $mysqli -> query ("SELECT nombre, apellido FROM usuario WHERE id_usuario =".$obj."");

		$valores = mysqli_fetch_array($queryRevista);

		if(isset($_GET['search'])){
			if(count($valores) > 0){
				echo "Hola <b>".$valores['nombre']."</b> ya te encuentras registrado";
			}else{
				echo "No estas registrado, por favor registrate antes de realizar una suscripción";
			}
		}

	}
	

		//return fetch_array;
	}

	function insertUser($mysqli, $obj){}

	function suscribeUser($mysqli, $obj){}
?>