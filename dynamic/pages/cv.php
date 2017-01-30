<div id="content">
	
	<?php
	//Connect to DB to display content taken from DB
		$db = mysqli_connect('localhost', 'root', '', 'indiv');
		mysqli_query($db, "SET NAMES utf8");

		if (!$db) {
    		die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error());
}
?>
	<div id="cont1">
		<h2>Pers Info</h2>
		<hr>
		<p>Andreas Terzitane</p>
		<p>19 y</p>
		<p>Kärrgränd 35</p>
		<br>
		<p>162 46 Vällingby</p>
		<p>Phone: 070 0434 665</p>
			<!-- EXTEND -->
		<br>
		
	</div>
	<div id="cont2">
	<h2>Education</h2>
	<hr>
			<div class="sitesection">
		    <p class="expand-one"><a href="#">IT-Gymnasiet &nbsp;&nbsp;&nbsp;Aug 2013 - Jun 2016 &nbsp;&nbsp;(Read more)</a></p>
		    				<?php
							$query = "SELECT * FROM texter WHERE ID = 1";
    						$result = mysqli_query($db, $query);
    						$ord = mysqli_fetch_assoc($result);
    						?>
							<p class="content-one"><?php
   							echo $ord['text'];
   							?></p>

		     <p class="expand-two"><a href="#">KYH &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aug 2016 - May 2018 &nbsp;(Read more)</a></p>
		    <?php
							$query = "SELECT * FROM texter WHERE ID = 2";
    						$result = mysqli_query($db, $query);
    						$ord = mysqli_fetch_assoc($result);
    						?>
							<p class="content-two"><?php
   							echo $ord['text'];
   							?></p>
   							<br>
		    <h2>Extras</h2>
		    <p class="expand-three"><a href="#">Bandit Lounge &nbsp;&nbsp;Aug 2013 - May 2016 (Read more)</a></p>
		    <p class="content-three">Company created by like minded individuals
<br>
									Founder, Organizer, Instructor
<br>
								
<br>
									Supervised a team of 20 to accomplish data entry tasks
<br>
									Ensured proper communication between team members
<br>
									Mediated disputes between team members
<br>
									Responsible for evaluating team performance and giving feedback
<br>
									Ability to coordinate and motivate a group</p>

		    <p class="expand-four"><a href="#">Talar 5 Språk (Read more)</a></p>
		  			 <?php
							$query = "SELECT * FROM texter WHERE ID = 3";
    						$result = mysqli_query($db, $query);
    						$ord = mysqli_fetch_assoc($result);
    						?>
							<p class="content-four"><?php
   							echo $ord['text'];
   							?></p>
		    

			</div>
	</div> 
			<div id="undcont">
				<h1>Portfolio</h1>
				<hr>
				<h3>Feel free to have a look at my past projects</h3>
				<div id="port1">
					<a href="https://github.com/Ateezey/Personal"<h3>GOAT</h3></a>
				</div>
				<div id="port2">
					<a href="https://github.com/Ateezey/Personal"<h3>TODO APP</h3></a>
				</div>
				
			</div>
</div>			

<script>
	$('.expand-one').click(function(){
   		$('.content-one').slideToggle('fast');
	});

	$('.expand-two').click(function(){
   		 $('.content-two').slideToggle('fast');
	});

	$('.expand-three').click(function(){
   		$('.content-three').slideToggle('fast');
	});

	$('.expand-four').click(function(){
   		$('.content-four').slideToggle('fast');
	});

</script>