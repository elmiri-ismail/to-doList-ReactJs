<?php
$dbh = new PDO("mysql:host=localhost:3306;dbname=task","root","Miriismail2002");
$sql = " SELECT * FROM test ";
$Query = $dbh->query($sql);
$gettasks = $Query->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($gettasks));
?>