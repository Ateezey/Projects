
<?php
 
 
function Connect()
{
 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "";
 $dbname = "indiv";
 
 // Create connection

 $conn = new mysqli($localhost, $root, $indiv) or die($conn->connect_error);
 
 return $conn;
}
 
?>