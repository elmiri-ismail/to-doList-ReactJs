<?php
$id = $_POST["sid"];
$dbh = new PDO("mysql:host=localhost:3306;dbname=task","root","Miriismail2002");
$sql = "DELETE FROM test WHERE id = $id";
$getStudents = $dbh->prepare($sql) ;
$getStudents->execute();
?>
