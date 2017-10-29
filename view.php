<html>

<head>
<link rel="stylesheet" href="style.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript" src="controller.js"></script>
<script src="collapse-menu.js"></script>
<script src="wheelzoom.js"></script>
<link rel="icon" type="image/png" href="favicon.ico" />
<link rel="stylesheet" href="leaflet.css" />
<script src="leaflet.js"> </script>
<?php include_once("ga.php") ?>
</head>

<body>
<div id="body">
<div id="main">
<div id="content">

	<div id="menu">
		<div id="menu-content">
			<ul id="menu-content-list">
				<!-- 
					The DOM manipulation/generation has been moved into a javascript controller.
					This removes the logic from the view, and captures it in a dedicated file for manipulation.
					Javascript is a client side language, so using it offloads the generation onto the client machine, 
					as opposed to generating the view on the file. 

					Inline styles have been moved into the external stylesheet (style.css). Inline css should be avoided whenever possible. 
				-->
			</ul>
		</div>
		<div id="donation">
			<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick">
			<input type="hidden" name="hosted_button_id" value="3BPTCWK3X2ALE">
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
			</form>
		</div>
	</div>
	<div id="maparea">
		<div id="map">
		</div>
		<div id="maptitle">
			<span>XIV Hunt Log</span>
		</div>
	</div>
</div>
</div>
</div>
</body>

</html>
