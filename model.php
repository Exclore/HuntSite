<?php

//This one is for the database talking gud

//global $db;
//$db = new MySQLi('localhost', 'mapsite', 'bakinb0nes', 'mapsite');
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
$basequery = 'SELECT Monsters.Name, ClassandGC.Name as class, HuntLog.Level as level, MonsterLocations.Xcoord, MonsterLocations.Ycoord, Locations.Name As Location, Regions.image as RegionImage, Locations.ImagePath as AreaImage FROM HuntLog JOIN ClassandGC ON HuntLog.ClassID = ClassandGC.ID JOIN Monsters ON HuntLog.MonsterID = Monsters.ID JOIN MonsterLocations ON Monsters.ID = MonsterLocations.MonsterID JOIN Locations ON MonsterLocations.LocationID = Locations.ID JOIN AreaRegions ON Locations.ID = AreaRegions.areaID JOIN Regions ON AreaRegions.RegionID = Regions.ID';

function classRankFilter ($class, $rank)
{
	global $db;
	global $basequery;
	
	if(!$class and !$rank)
	{
		$query = $basequery.' ORDER BY class, level';
		$result = $db->query($query);
		return ConvertDBobjToJson($result);
	}
	
	$query = $basequery.' WHERE class = "'.$class.'" AND level BETWEEN '.($rank-9).' AND '.($rank).' ORDER BY level';
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
