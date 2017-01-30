

<?php

require 'connection.php';
$conn    = Connect();
$name    = $conn->real_escape_string($_POST['name']);
$email   = $conn->real_escape_string($_POST['email']);
$message = $conn->real_escape_string($_POST['message']);
$query   = "INSERT into MSG (name,email,message) VALUES('" . $name . "','" . $email . "','" . $message . "')";
$success = $conn->query($query);

if (!$success) {
    die("Couldn't enter data: ".$conn->error);

}

echo "Msg Sent";

$conn->close();

?>
