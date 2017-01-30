<?php

$link = mysqli_connect("localhost", "root", "", "indiv");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Escape user inputs for security
$first_name = mysqli_real_escape_string($link, $_POST['firstname']);
$email = mysqli_real_escape_string($link, $_POST['email']);
$message = mysqli_real_escape_string($link, $_POST['message']);
 
// attempt insert query execution
$sql = "INSERT INTO MSG (name, email, message) VALUES ('$first_name', '$email', '$message')";
if(mysqli_query($link, $sql)){
    echo "Message Sent!";

} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// close connection
mysqli_close($link);
?>
<html>
<meta http-equiv="refresh" content="0; index.php"
<body>
<br>
<br>
<a href="index.php">Go back</a>
</body>
</html>