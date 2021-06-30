<?php
$dbh = new PDO("mysql:host=localhost:3306;dbname=task","root","Miriismail2002");
$sql = " INSERT INTO test(tache,done) VALUES (:tache,:done)";
$addStudentsQuery = $dbh->prepare($sql);
$addStudentsQuery->bindParam(":tache",$_POST["tache"],PDO::PARAM_STR);
$addStudentsQuery->bindParam(":done",$_POST["done"],PDO::PARAM_STR);

$addStudentsQuery->execute();
?>
