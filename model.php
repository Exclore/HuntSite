<?php

//This one is for the database talking gud

global $db;
$db = new MySQLi('localhost', 'mapsite', 'bakinb0nes', 'mapsite');
//Connection Test
/*if(!$db){
echo '<!--Unable to connect to DB'-->;
exit;
}
else {
	echo '<!--Connection Successful!-->';
}
*/

//$testdbdump = mysqli_query($db, "SELECT * FROM MonsterLocations WHERE ID = 1");
//var_dump(mysqli_fetch_assoc($testdbdump));

global $basequery; 
$basequery = 'SELECT Monsters.Name, MonsterLocations.Xcoord, MonsterLocations.Ycoord, Locations.Name As Location FROM HuntLog JOIN ClassandGC ON HuntLog.ClassID = ClassandGC.ID JOIN Monsters ON HuntLog.MonsterID = Monsters.ID JOIN MonsterLocations ON Monsters.ID = MonsterLocations.MonsterID JOIN Locations ON MonsterLocations.LocationID = Locations.ID';

function classRankFilter ($class, $rank)
{
	global $db;
	global $basequery;
	$query = $basequery.' WHERE ClassandGC.Name = "'.$class.'" AND HuntLog.Level = "'.$rank.'"';
	$result = $db->query($query);
	return ConvertDBobjToJson($result);
	
}


function ConvertDBobjToJson ($obj)
{
	$data = array();
	if ($obj)
	{
		while ( $row = $obj->fetch_assoc() )
		{
			array_push($data, $row);
		}
		return json_encode($data);
	}
	return NULL;
}
?>
