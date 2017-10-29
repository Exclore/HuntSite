
var classList = ["Marauder","Gladiator","Pugilist","Lancer","Archer","Conjurer","Thaumaturge","Arcanist","Rogue"];
var grandCompanyList = ["Immortal Flames","Twin Adders","Maelstrom"];
var map;
var mapImage;
var bounds = [[0,0], [42,42]];
var markerGroup;
var allData;

$('document').ready(function(){
	$.ajaxSetup({async:false});
	$.getJSON("/json.php", function(data, success){setAllData(data)});
	$.ajaxSetup({async:true});
    buildMenu();
	buildMap();
	preloadImages();
});

function setAllData(data)
{
	allData = data;
}
function preloadImages()
{
	var allImages = [];
	for(var i in allData)
	{
		var img = allData[i]['AreaImage'];
		if(allImages.indexOf(img) < 0)
		{
			allImages.push(img);
		}
	}
	for(var img in allImages)
	{
		var newimg = new Image();
		img.src = img;
	}
}

//---------------------------------------------------------------------------
//Menu Functions
//---------------------------------------------------------------------------
function buildMenu(){
  buildClassMenu(); // Adds the class's to the nav list
  buildGrandCompanyMenu(); // Adds the grand companies to the list
  showMonstersMenu(); //add individual monsters per class to the list
  registerClickEvents();
   
}

function registerClickEvents(){
   $('ul#menu-content-list .monster > span').on('click', function(e){monsterSelected(e.currentTarget.parentElement);});
}

function showMonstersMenu()
{
	$.ajaxSetup({async:false});
	$("ul#menu-content-list .level > span").each(function(){getClassAndGC($(this).parent().get(0));});
	$.ajaxSetup({async:true});
}

function buildClassMenu(){
  var list = document.getElementById("menu-content-list");

    // Build list of job hunts
    classList.forEach(function(element){

            var listItem = document.createElement('li');
            listItem.style.background = "url('images/" + element + ".png')";
            listItem.classList.add('listItem');
			listItem.classList.add('class');
            listItem.innerHTML = '<span>'+element+'</span>';


            var subList = document.createElement('ul');

            var subListItem1 = document.createElement('li');
			subListItem1.classList.add("level");
            subListItem1.innerHTML = '<span>lv 1-10</span>'
			subListItem1.setAttribute("dataClass",element);
			subListItem1.setAttribute("dataLevel","10");

            var subListItem2 = document.createElement('li');
			subListItem2.classList.add("level");
            subListItem2.innerHTML = '<span>lv 11-20</span>'
			subListItem2.setAttribute("dataClass",element);
			subListItem2.setAttribute("dataLevel","20");

            var subListItem3 = document.createElement('li');
			subListItem3.classList.add("level");
            subListItem3.innerHTML = '<span>lv 21-30</span>'
			subListItem3.setAttribute("dataClass",element);
			subListItem3.setAttribute("dataLevel","30");
			
            var subListItem4 = document.createElement('li');
			subListItem4.classList.add("level");
            subListItem4.innerHTML = '<span>lv 31-40</span>'                
			subListItem4.setAttribute("dataClass",element);
			subListItem4.setAttribute("dataLevel","40");
			
            var subListItem5 = document.createElement('li');
			subListItem5.classList.add("level");
            subListItem5.innerHTML = '<span>lv 41-50</span>'
			subListItem5.setAttribute("dataClass",element);
			subListItem5.setAttribute("dataLevel","50");
			
            subList.appendChild(subListItem1);
            subList.appendChild(subListItem2);
            subList.appendChild(subListItem3);
            subList.appendChild(subListItem4);                       
            subList.appendChild(subListItem5);

            listItem.appendChild(subList);
            list.appendChild(listItem);

    });
}

function buildGrandCompanyMenu(){
     var list = document.getElementById("menu-content-list");

    // Build list of grand company hunts
    grandCompanyList.forEach(function(element){
            var listItem = document.createElement('li');
            listItem.innerHTML = '<span>'+element+'</span>';
            listItem.style.background = "url('images/" + element + ".png')";
            listItem.classList.add('listItem');

            var subList = document.createElement('ul');

            var subListItem1 = document.createElement('li');
			subListItem1.classList.add("level");
            subListItem1.innerHTML = '<span>lv 21-30</span>'
			subListItem1.setAttribute("dataClass",element);
			subListItem1.setAttribute("dataLevel","10");
			
			
            var subListItem2 = document.createElement('li');
			subListItem2.classList.add("level");
            subListItem2.innerHTML = '<span>lv 31-40</span>'                
			subListItem2.setAttribute("dataClass",element);
			subListItem2.setAttribute("dataLevel","20");
			
            var subListItem3 = document.createElement('li');
			subListItem3.classList.add("level");
            subListItem3.innerHTML = '<span>lv 41-50</span>'
			subListItem3.setAttribute("dataClass",element);
			subListItem3.setAttribute("dataLevel","30");
			
            subList.appendChild(subListItem1);
            subList.appendChild(subListItem2);
            subList.appendChild(subListItem3);

            listItem.appendChild(subList);
            list.appendChild(listItem);
    });
}

function getClassAndGC(target){
	var classGC = target.getAttribute("dataClass");
	var level = target.getAttribute("dataLevel");
	var data = [];
	for(var i in allData){
		var obj = allData[i];
		if(obj['class'] == classGC && parseInt(obj['level']) > level-10 && parseInt(obj['level']) <= level)
		{
			data.push(obj);
		}
	}
	//console.log(data);
	listMonsters(data, target);
}

function listMonsters(data, target){
	//console.log(target.getAttribute("dataLevel"));
	var subList = document.createElement('ul');
	
	data.forEach(function(element){
		var subListItem = document.createElement('li');
		subListItem.classList.add("monster");
		subListItem.innerHTML="<span>"+element['Name']+"</span>";
		subListItem.setAttribute("dataMap", element["AreaImage"]);
		subListItem.setAttribute("dataXCoord", element["Xcoord"]);
		subListItem.setAttribute("dataYCoord", element["Ycoord"]);
		subListItem.setAttribute("dataName", element["Name"]);
		subListItem.setAttribute("dataMapTitle", element["Location"]);
		subList.appendChild(subListItem);
	});
	target.appendChild(subList);
}

//---------------------------------------------------------------------------
//Map Functions
//---------------------------------------------------------------------------
function buildMap()
{
	initializeMap();
	
}



function initializeMap()
{
	map = L.map('map',{crs: L.CRS.Simple, minZoom: 0, inertia: false, maxBounds: bounds});
	
	mapImage = L.imageOverlay('images/Maps/ffxiv-maps-eorzea.png', bounds);
	mapImage.addTo(map);
	map.fitBounds(bounds);
	markerGroup = L.layerGroup()
	markerGroup.addTo(map);
	//var mapImage = document.createElement("img");
	//mapImage.setAttribute("src", "images/Maps/CoerthasRegion.PNG");
	//document.getElementById("map").appendChild(mapImage);
}

/*
function zoomMap()
{
	wheelzoom(document.querySelectorAll('#map > img')); //initializes the zooming/dragging functions from WheelZoom
}
*/

function monsterSelected(e)
{
	var path = e.getAttribute("dataMap");
	var mapTitle = e.getAttribute("datamaptitle");
	swapActiveMap(path, mapTitle);
	placeCoords(e);
}

function swapActiveMap(mapurl, maptitle)
{
	var newMapImage = mapImage = L.imageOverlay('/images/Maps/'+mapurl, bounds);
	mapImage.remove();
	mapImage = newMapImage;
	mapImage.addTo(map);
	markerGroup.remove();
	markerGroup = L.layerGroup()
	markerGroup.addTo(map);
	$("#maptitle span").get(0).innerHTML=maptitle;
	/*console.log(map);
	var mapimg = $('#map > img');
	$.ajaxSetup({async:false});
	mapimg.get(0).dispatchEvent(new CustomEvent('wheelzoom.destroy'));
	
   mapimg.fadeOut(300, function(){
      $(this).attr('src','images/Maps/'+map).bind('onreadystatechange load', function(){
			if (this.complete) $(this).fadeIn(300);
      });
   });
	$.ajaxSetup({async:true});
	zoomMap();*/
}

function placeCoords(e)
{
	L.marker([42-e.getAttribute("dataYCoord"),e.getAttribute("dataXCoord")],{title:e.getAttribute("dataName")}).addTo(markerGroup);

	
	/*for(var i=0; i <= 40; i+=5)
	{
		for(var j=0; j <= 40; j+=5){
			L.marker([42-i,j],{title:i+" "+j}).addTo(map);
		}
	}*/
}
















