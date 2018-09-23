<?php
function ToHex($Z){

	if($Z <= 9){
		$Z = $Z;
	}
	elseif($Z == 10){
		$Z = "A";
	}
	if($Z == 11){
		$Z = "B";
	}
	elseif($Z == 12){
		$Z = "C";
	}
	if($Z == 13){
		$Z = "D";
	}
	elseif($Z == 14){
		$Z = "E";
	}
	elseif($Z == 15){
		$Z = "F";
	}

	return $Z;
}

function rgb_to_hex($R, $G, $B)
{
	if($R >= 255)
	{
		$R =255;
	}
	if($R < 0)
	{
		$R = 0;
	}
	/// 1 valor
	$R1 = intdiv($R,16);
	/// to hex

	//// 2 valor 
	$R2 = $R-(16 *$R1);
	/////// to hex
	$R1 = ToHex($R1);
	$R2 = ToHex($R2);
////G 
	if($G >= 255)
	{
		$G =255;
	}
	if($G < 0)
	{
		$G = 0;
	}
	/// 1 valor
	$G1 = intdiv($G,16);
	/// to hex
	

	//// 2 valor 
	$G2 = $G - (16 *$G1);
	/////// to hex
	$G1 = ToHex($G1);
	$G2 = ToHex($G2);
////////B
	if($B >= 255)
	{
		$B =255;
	}
	if($B < 0)
	{
		$B = 0;
	}
	/// 1 valor
	$B1 = intdiv($B,16);
	/// to hex

	//// 2 valor 
	$B2 = $B - (16 *$B1);
	/////// to hex
	$B1 = ToHex($B1);
	$B2 = ToHex($B2);

	

	return $R1.','.$R2.','.$G1.','.$G2.','.$B1.','.$B2;
}

echo "Rgb to hex: ","#" , rgb_to_hex(255,255,255);

?>