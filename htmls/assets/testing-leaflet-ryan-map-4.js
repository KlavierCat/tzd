
var map = new L.Map('map',{
	zoomControl:false
});

//Disable zoom handlers, disable dragging function;
//map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();

// Disable tap handler, if present.
if (map.tap) map.tap.disable();

//Prepare the background tile layer
var zombieLayer = new L.TileLayer('http://{s}.tiles.mapbox.com/v3/klaviercat.ilh01oim/{z}/{x}/{y}.png');

map.fitBounds([
	[53.34189,-6.259525],
	[53.345484,-6.249404]
]);

var imageUrl='https://www.scss.tcd.ie/~plin/zombie/images/map-big-new-black.jpg',
	imageBounds = [[53.346836,-6.262141],[53.340691,-6.247056]]; //northWest, southEast
	
L.imageOverlay(imageUrl,imageBounds).addTo(map);


//window.addEventListener('resize', function(event){
//	var width=document.documentElement.clientWidth;	
//	if (width < 640){
//		map.setZoom(16);
//		map.dragging.enable();
//};
//});


//set icon for markers
var redIcon = L.icon({
	iconUrl:'images/marker.png',
	iconSize:[20,20],
	iconAnchor:[10,10]
//popupAnchor:
})

//Load the background tiles
map.addLayer(zombieLayer);

//Create an empty layer to load the polygon
var featureLayer = new L.GeoJSON();

var defaultStyle = {
	color:"#95D1DA",
	weight:1.5,
	opacity:1,
	fillColor:"#95D1DA",
	fillOpacity:0.7
};

var highlightStyle = {
	color:"#D90000",
	weight:1.5,
	opacity:1,
	fillColor:"#D90000",
	fillOpacity:0.7
}

//add markers with url
function add_marker(){
	var points = [
		["p1", 53.34258, -6.25125, "item-01.html"],
		["p2", 53.34228, -6.25141, "item-02.html"]
	];
	var marker = [];
	var i;
	for (i=0;i<points.length;i++){
		marker[i] = new L.marker([points[i][1], points[i][2]],{icon:redIcon,win_url:points[i][3]});
		marker[i].addTo(map);
		marker[i].on('click',markerClick);
	};
}

function markerClick(e){
	console.log(this.options.win_url);
	window.open(this.options.win_url,"_blank");
}


				//location [53.34258,-6.25125]
				//location:[53.34228,-6.25141]

var onEachFeature = function(feature, layer) {
	layer.setStyle(defaultStyle);

	(function(layer, properties){
		layer.on("mouseover",function(e){
		
			layer.setStyle(highlightStyle);

			var popup = $("<div></div>", {
				id:"popup-" + properties.ID,
				class:"popup-map",
			});

			var hed = $("<div></div>",{
				text:properties.BUILDING,
			}).appendTo(popup);

			popup.appendTo("#map");

			layer.on("click",function(e){
				map.fitBounds(e.target.getBounds());

				map.removeLayer(featureLayer);
				$("#popup-"+properties.ID).remove();

				add_marker();
				
//Todo: the marker should be loaded via GeoJson or a list!
				//location [53.34258,-6.25125]
				//location:[53.34228,-6.25141]

//				var marker_1 = L.marker([53.34258,-6.25125],{icon:redIcon},{win_url:"http://www.google.com/"}).addTo(map);
//				var marker_2 = L.marker([53.34228,-6.25141],{icon:redIcon},{win_url:"http://www.baidu.com/"}).addTo(map);

//				marker_1.on('click',onClick);
//				marker_2.on('click',onClick);
				
//				function onClick(e){
//					console.log(this.options.win_url);
//					window.open(this.options.win_url);
//				}
//might be useful in the future:
//				map.addLayer(marker);
//				map.removeLayer(marker);
//Todo: add a back-button which will send the user back to the original setting/map if clicked, and suicide once the original setting/map is achieved.
			});
		});
		//create a mouseover event that undoes the mouseover changes
		layer.on("mouseout",function(e){
			layer.setStyle(defaultStyle);
			$("#popup-"+properties.ID).remove();
		});

	})(layer, feature.properties);
};

//Add the GeoJSON to the layer, which is loaded in the <head>
var featureLayer = L.geoJson(boundaries, {
	onEachFeature: onEachFeature
});

//for testing
		var popup = L.popup();
		function onMapClick(e) {
			popup
				.setLatLng(e.latlng)
				.setContent("You clicked the map at " + e.latlng.toString())
				.openOn(map);
		}
		map.on('click', onMapClick);
//end of for testing

map.addLayer(featureLayer);