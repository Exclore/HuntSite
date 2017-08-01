<html>

<head>
<link rel="stylesheet" href="style.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript" src="controller.js"></script>
<script src="collapse-menu.js"></script>

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
	</div>
	
	<div id="map">
		
	</div>
	
</div>
</div>
</div>
</body>

</html>
