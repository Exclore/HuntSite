<?php
$cat = 'cats are cool bruh';
echo $cat.'<br />';
if (!$link = mysqli_connect('localhost', 'testuser', '1234', 'test'))
{
echo 'ERROR WILL ROBINSON';
exit;
}
$sql = 'SELECT * FROM testtable WHERE column_1 = 1';
$result = mysqli_query($link, $sql);
$row = mysqli_fetch_assoc($result);
echo $row['column_2'];
echo '<br />';
var_dump ($row);