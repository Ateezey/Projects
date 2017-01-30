<!DOCTYPE HTML>
<html>
<head>
<link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="style.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">


 <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>



</head>

<body>
<?php include 'header.php'; ?>

	

	<!-- Switch function connected with nav to change content-->
	<?php  
		
		
		$p = $_GET['page'];


		switch($p){
			case "home":
				include('pages/home.php');
			break;

			case "cv":
				include('pages/cv.php');
			break;

			case "contact":
				include('pages/contact.php');
			break;

			default;
				include('pages/home.php');
			break;
		}
		?>
			
	
	<?php include 'footer.php'; ?>

</body>
</html>