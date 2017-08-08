
var classList = ["Marauder","Gladiator","Pugilist","Lancer","Archer","Conjurer","Thaumaturge","Arcanist","Rogue"];
var grandCompanyList = ["Immortal Flames","Twin Adders","Maelstrom"];


$('document').ready(function(){
    buildMenu();
	buildMap();
});

//---------------------------------------------------------------------------
//Menu Functions
//---------------------------------------------------------------------------
function buildMenu(){
  buildClassMenu(); // Adds the class's to the nav list
  buildGrandCompanyMenu(); // Adds the grand companies to the list
  showMonstersMenu(); //add individual monsters per class to the list
}

function showMonstersMenu()
{
	$("ul#menu-content-list > li li > span").each(function(){getClassAndGC($(this).parent().get(0));});
}

function buildClassMenu(){
  var list = document.getElementById("menu-content-list");

    // Build list of job hunts
    classList.forEach(function(element){

            var listItem = document.createElement('li');
            listItem.style.background = "url('images/" + element + ".png')";
            listItem.classList.add('listItem');
            listItem.innerHTML = '<span>'+element+'</span>';


            var subList = document.createElement('ul');

            var subListItem1 = document.createElement('li');
            subListItem1.innerHTML = '<span>lv 1-10</span>'
			subListItem1.setAttribute("dataClass",element);
			subListItem1.setAttribute("dataLevel","10");

            var subListItem2 = document.createElement('li');
            subListItem2.innerHTML = '<span>lv 11-20</span>'
			subListItem2.setAttribute("dataClass",element);
			subListItem2.setAttribute("dataLevel","20");

            var subListItem3 = document.createElement('li');
            subListItem3.innerHTML = '<span>lv 21-30</span>'
			subListItem3.setAttribute("dataClass",element);
			subListItem3.setAttribute("dataLevel","30");
			
            var subListItem4 = document.createElement('li');
            subListItem4.innerHTML = '<span>lv 31-40</span>'                
			subListItem4.setAttribute("dataClass",element);
			subListItem4.setAttribute("dataLevel","40");
			
            var subListItem5 = document.createElement('li');
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
            subListItem1.innerHTML = '<span>lv 21-30</span>'
			subListItem1.setAttribute("dataClass",element);
			subListItem1.setAttribute("dataLevel","30");
			
			
            var subListItem2 = document.createElement('li');
            subListItem2.innerHTML = '<span>lv 31-40</span>'                
			subListItem2.setAttribute("dataClass",element);
			subListItem2.setAttribute("dataLevel","40");
			
            var subListItem3 = document.createElement('li');
            subListItem3.innerHTML = '<span>lv 41-50</span>'
			subListItem3.setAttribute("dataClass",element);
			subListItem3.setAttribute("dataLevel","50");
			
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
	//console.log("class=" + classGC + " level=" + level);
	var url = "/json.php?class="+classGC+"&level="+level;
	console.log("Attempting to query: "+url);
	$.getJSON(url, function(data, success){listMonsters(data, target);});
}

function listMonsters(data, target){
	console.log(target.getAttribute("dataLevel"));
	var subList = document.createElement('ul');
	
	data.forEach(function(element){
		var subListItem = document.createElement('li');
		subListItem.innerHTML="<span>"+element['Name']+"</span>";
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
	zoomMap();
	dragMap();
	monsterMarkers();
	swapActiveMap();
}




function initializeMap()
{
	var mapImage = document.createElement("img");
	mapImage.setAttribute("src", "/images/Maps/CoerthasRegion.PNG");
	document.getElementById("map").appendChild(mapImage);
}

function zoomMap()
{
	wheelzoom(document.querySelectorAll('#map > img'));
}

function dragMap()
{
}

function monsterMarkers()
{
}

function swapActiveMap()
{
}


















