<html>

<head>
<link rel="stylesheet" href="style.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="collapse-menu.js"></script>


</head>

<body>
<div id="body">
<div id="main">
<div id="content">

	<div id="menu">
		<div id="menu-content">
			<ul id="menu-content-list">
			<?php
				$ClassList= array("Marauder","Gladiator","Pugilist","Lancer","Archer","Conjurer","Thaumaturge","Arcanist","Rogue");
				$GrandCompanyList= array("Immortal Flames","Twin Adders","Maelstrom");
				foreach( $ClassList as $class ){
			?>
				<li style="background:url('images/<?=$class;?>.png') no-repeat;padding-left:40px;"><?=$class;?><ul>
					<li><span>lv 1-10</span></li>
					<li><span>lv 11-20</span></li>
					<li><span>lv 21-30</span></li>
					<li><span>lv 31-40</span></li>
					<li><span>lv 41-50</span></li>
				</ul></li>
				<?php }
				echo "<br /> <hr /> <br />";
				foreach( $GrandCompanyList as $company ){
			?>
				<li style="background:url('images/<?=$company;?>.png') no-repeat;padding-left:40px; margin-bottom:3px; background-size:auto 32px;"><?=$company;?><ul>
					<li>lv 21-30</li>
					<li>lv 31-40</li>
					<li>lv 41-50</li>
				</ul></li>
				<?php }
				?>
			</ul>
		</div>
	</div>
	
	<div id="map">
		
	</div>
	
</div>
</div>
</div>
</body>

</html>
