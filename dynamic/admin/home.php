<?php
	require_once('auth.php');
?>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Untitled Document</title>
<style type="text/css">
<!--
.style1 {
	font-size: 36px;
	font-weight: bold;
}
-->
</style>
</head>
 <body>
 




<p align="center" class="style1">Login successfully </p>
<?php
		$db = mysqli_connect('localhost', 'root', '', 'indiv');
		mysqli_query($db, "SET NAMES utf8");

			if (!$db) {
		    	die('Connect Error (' . mysqli_connect_errno() . ') '
		        	    . mysqli_connect_error());
			}
?>

	<?php
	if(isset($_POST['update1'])){ 
		$parag1 = $_POST['paragraf1'];
	$q = "UPDATE texter SET text = '$parag1' WHERE id = 1;";
	mysqli_query($db, $q);
    }
	
		$query = "SELECT * FROM texter WHERE ID = 1";
    	$result = mysqli_query($db, $query);
   		$ord = mysqli_fetch_assoc($result);
        echo 'Text: ';
   		echo $ord['text'];	
   		echo "<br />
    	    <p>Ändra:</p> 
         	<form method='post'>
         	<textarea rows='5' cols='50' name='paragraf1'></textarea>
         	<input type='submit' value='Skicka' name='update1'>
        	</form>";  	
    ?>
</p>

    
	<?php
	if(isset($_POST['update2'])){ 
		$parag2 = $_POST['paragraf2'];
	$q = "UPDATE texter SET text = '$parag2' WHERE id = 2;";
	mysqli_query($db, $q);
    }

	$query = "SELECT * FROM texter WHERE ID = 2";
    $result = mysqli_query($db, $query);
    $ord = mysqli_fetch_assoc($result);
    echo 'Text: ';
    echo $ord['text'];
    echo "<br />
         <p>Ändra:</p> 
         <form method='post'>
         <textarea rows='5' cols='50' name='paragraf2'></textarea>
         <input type='submit' value='Skicka' name='update2'>
         </form>"; 
	?>
</p>

	<?php
	if(isset($_POST['update3'])){ 
		$parag3 = $_POST['paragraf3'];
	$q = "UPDATE texter SET text = '$parag3' WHERE id = 3;";
	mysqli_query($db, $q);
    }

	$query = "SELECT * FROM texter WHERE ID = 3";
    $result = mysqli_query($db, $query);
    $ord = mysqli_fetch_assoc($result);
    echo 'Text: ';
    echo $ord['text'];
    echo "<br />
         <p>Ändra:</p> 
         <form method='post'>
         <textarea rows='5' cols='50' name='paragraf3'></textarea>
         <input type='submit' value='Skicka' name='update3'>
         </form>";  
	?>
</p>
<p align="center"><a href="index.php">logout</a></p>
</body>
</html>