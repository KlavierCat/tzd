//TODO: line 258 / 362 / 363 - 26/08/2014 - Panpan
 
//set level
	var level = getStage();

	var boundaries;

	switch(level){
		case 0:
			boundaries = boundaries0;
			break;
		case 1:
			boundaries = boundaries1;
			break;
		case 2:
			boundaries = boundaries2;
			break;
		case 3:
			boundaries = boundaries3;
			break;
		case 4:
			boundaries = boundaries4;
			break;
		case 5:
			boundaries = boundaries4;
			break;
	}
//end of set level

// basic setting for map
	var map = new L.Map('map',{
		zoomControl:false,
		maxZoom:19,
		//	minZoom:16,
		maxBounds:[[53.346836,-6.262141],[53.340691,-6.247056]]
	});

	//Disable zoom handlers, disable dragging function;
	map.dragging.disable();
	map.touchZoom.disable();
	map.doubleClickZoom.disable();
	map.scrollWheelZoom.disable();

	// Disable tap handler, if present.
	if (map.tap) map.tap.disable();

	map.fitBounds([
		[53.34189,-6.259925],
		[53.345484,-6.249404]
	]);
	
	var imageUrl='images/map.jpg',
	imageBounds = [[53.346836,-6.262141],[53.340691,-6.247056]]; //northWest, southEast
	
	L.imageOverlay(imageUrl,imageBounds).addTo(map);
//end of basic setting for map	

//set polygon styles for building
	var defaultStyle = {
		color:"#EC8080",
		weight:1.5,
		opacity:1,
		fillColor:"#EC8080",
		fillOpacity:0.7
	};

	var highlightStyle = {
		color:"#D90000",
		weight:1.5,
		opacity:1,
		fillColor:"#D90000",
		fillOpacity:0.7
	}

	var unlockedStyle = {
		color:"#95D1DA",
		weight:1.5,
		opacity:1,
		fillColor:"#95D1DA",
		fillOpacity:0.7	
	}
//end of set polygon styles for building


//set icon styles for markers/evidences
	var imageIcon = L.icon({
		iconUrl:'images/evidence-icon-image.png',
		iconSize:[30,30],
		iconAnchor:[15,15]
	})

	var audioIcon = L.icon({
		iconUrl:'images/evidence-icon-audio.png',
		iconSize:[30,30],
		iconAnchor:[15,15]
	})

	var filmIcon = L.icon({
		iconUrl:'images/evidence-icon-film.png',
		iconSize:[30,30],
		iconAnchor:[15,15]
	})
	
	var imageIconFound = L.icon({
		iconUrl:'images/evidence-icon-image-found.png',
		iconSize:[30,30],
		iconAnchor:[15,15]
	})

	var audioIconFound = L.icon({
		iconUrl:'images/evidence-icon-audio-found.png',
		iconSize:[30,30],
		iconAnchor:[15,15]
	})

	var filmIconFound = L.icon({
		iconUrl:'images/evidence-icon-film-found.png',
		iconSize:[30,30],
		iconAnchor:[15,15]
	})
//end of set icon styles for markers/evidences

//load data for markers/evidences
	// points = [evidenceID{int}, hostBuildingID{int}, Lat{float}, Lng{float}, url{str}, fileTypeIcon{object}, title{str}]
	var points = [
		[0, 8, 53.34399, -6.25714, "evidence/00_bbc.html", imageIcon, "BBC article"],
		[1, 16, 53.34421, -6.2527, "evidence/01_IrishHound.html", imageIcon, "newspaper article - Irish hound badger"],
		[2, 1, 53.34374, -6.25877, "evidence/02_research_agreement.html", imageIcon, "application from funding"],
		[3, 1, 53.34358, -6.25864, "evidence/03_deposit_receipt.html", imageIcon, "funding cheque deposit receipt"],
		[4, 22, 53.34272, -6.25069, "evidence/04_newsreport_research_start.html", filmIcon, "news report research beginning"],
		[5, 10, 53.34323, -6.25624, "evidence/05_newspaper_supercure.html", imageIcon, "news report super cure"],
		[6, 21, 53.34222, -6.251, "evidence/06_pic_of_team.html", imageIcon, "picture of team beginning research"],
		[7, 15, 53.34493, -6.25435, "evidence/07_complab.html", filmIcon, "lab footage"],
		[8, 4, 53.34469, -6.25795, "evidence/08_axel_lab.html", imageIcon, "Axel lab photo"],
		[9, 10, 53.34324, -6.25586, "evidence/09_fergAudio.html", audioIcon, "scientist audio log"],
		[10, 14, 53.34319, -6.25502, "evidence/10_faulkner_child.html", imageIcon, "Axel child cancer"],
		[11, 7, 53.34313, -6.25684, "evidence/11_financial_times.html", imageIcon, "Financial Times - share price down"],
		[12, 23, 53.34319, -6.25074, "evidence/12_axel_meeting_email.html", imageIcon, "Axel meeting email"],
		[13, 21, 53.34243, -6.25123, "evidence/13_research_notes.html", imageIcon, "notes of formula"],
		[14, 6, 53.34274, -6.25419, "evidence/14_testing_results_phase4.html", imageIcon, "testing results letter"],
		[15, 19, 53.34419, -6.25176, "evidence/15_benAudio.html", audioIcon, "Axel audio log"],
		[16, 22, 53.34267, -6.25114, "evidence/16_test_results_formula.html", imageIcon, "test results formula sheet"],
		[17, 20, 53.34363, -6.25093, "evidence/17_axel_weekend_email.html", imageIcon, "email - working weekend"],
		[18, 20, 53.34367, -6.25122, "evidence/18_axel_holidays_email.html", imageIcon, "email about no holidays"],
		[19, 20, 53.34379, -6.25094, "evidence/19_fatigue_email.html", imageIcon, "email about fatigue, mistakes..."],
		[20, 11, 53.34361, -6.25589, "evidence/20_explosionvid.html", filmIcon, "footage of explosion"],
		[21, 23, 53.3433, -6.25035, "evidence/21_newsreport_explosion.html", filmIcon, "news report of explosion"],
		[22, 1, 53.34389, -6.25879, "evidence/22_Fire_Report.html", imageIcon, "fire report"],
		[23, 8, 53.34397, -6.25637, "evidence/23_email_visit_axel.html", imageIcon, "visit Axel email"],
		[24, 17, 53.34212, -6.25313, "evidence/24_idm_stock_letter.html", imageIcon, "IDM shareholder letter"],
		[25, 16, 53.34426, -6.25286, "evidence/25_idm_bankrupt.html", imageIcon, "newspaper report - IDM gone"],
		[26, 1, 53.34361, -6.25874, "evidence/26_pierre_leaving_email.html", imageIcon, "Pierre leaving email"],
		[27, 5, 53.34384, -6.25776, "evidence/27_boarding_card.html", imageIcon, "P. O'Shea boarding pass"],
		[28, 8, 53.34393, -6.2563, "evidence/28_ailian_flu_email.html", imageIcon, "Ailian flu email"],
		[29, 6, 53.34491, -6.25767, "evidence/29_fluspread.html", imageIcon, "newspaper spread about flu"],
		[30, 3, 53.34443, -6.25854, "evidence/30_pamphlet.html", imageIcon, "pamplet on flu"],
		[31, 12, 53.34428, -6.25626, "evidence/31_axel_waking_email.html", imageIcon, "email about Axel waking up"],
		[32, 12, 53.34436, -6.25626, "evidence/32_medCert.html", imageIcon, "medical certificate"],
		[33, 14, 53.34287, -6.2552, "evidence/33_flue.html", imageIcon, "flu photos"],
		[34, 14, 53.34332, -6.25425, "evidence/34_Faulkner1.html", imageIcon, "Axel medical report 1"],
		[35, 16, 53.34435, -6.25316, "evidence/35_ny_newspaper.html", imageIcon, "NYU newspaper"],
		[36, 13, 53.34441, -6.25517, "evidence/36_newspaper_martial_law.html", imageIcon, "martial law headline"],
		[37, 10, 53.34266, -6.25583, "evidence/37_china.html", imageIcon, "China headline"],
		[38, 17, 53.34223, -6.25363, "evidence/38_press_conference.html", filmIcon, "government press conference"],
		[39, 8, 53.34394, -6.25682, "evidence/39_who_id.html", imageIcon, "WHO ID card"],
		[40, 19, 53.34413, -6.25206, "evidence/40_newsreport_quarantine.html", filmIcon, "news report on quarantine"],
		[41, 5, 53.34388, -6.25757, "evidence/41_notification_of_quarantine.html", imageIcon, "notification poster"],
		[42, 12, 53.34448, -6.25624, "evidence/42_diary1.html", imageIcon, "diary 1"],
		[43, 20, 53.34391, -6.25108, "evidence/43_avoid_direct_contact.html", imageIcon, "quarantine poster"],
		[44, 17, 53.34214, -6.25348, "evidence/44_auth_personnel.html", imageIcon, "quarantine poster 2"],
		[45, 18, 53.34275, -6.25283, "evidence/45_zombru.html", imageIcon, "zombru beer"],
		[46, 15, 53.34472, -6.25441, "evidence/46_quarantine_skip.html", imageIcon, "quarantine image"],
		[47, 6, 53.34513, -6.25751, "evidence/47_logan_id.html", imageIcon, "Logan military ID"],
		[48, 2, 53.34423, -6.25816, "evidence/48_rivera_id.html", imageIcon, "Julio military ID"],
		[49, 12, 53.34454, -6.25627, "evidence/49_diary2.html", imageIcon, "diary 2"],
		[50, 9, 53.34516, -6.25685, "evidence/50_flu_graph.html", imageIcon, "info graph"],
		[51, 22, 53.34263, -6.25092, "evidence/51_Stage2.html", imageIcon, "stage 2"],
		[52, 7, 53.34301, -6.2567, "evidence/52_RyanAudio.html", audioIcon, "survivor audio log - 2"],
		[53, 6, 53.34514, -6.25793, "evidence/53_Faulkner2.html", imageIcon, "Axel medical report 2"],
		[54, 7, 53.34307, -6.25646, "evidence/54_Experimental_Trial1.html", imageIcon, "testing report"],
		[55, 14, 53.34301, -6.25304, "evidence/55_quarantine_truck.html", imageIcon, "quarantine image 2"],
		[56, 9, 53.34529, -6.25665, "evidence/56_diary3.html", imageIcon, "diary 3"],
		[57, 1, 53.34347, -6.2588, "evidence/57_classified_book_of_kells.html", imageIcon, "classified report"],
		[58, 1, 53.3438, -6.25869, "evidence/58_kyleAudio.html", audioIcon, "survivor audio log - 1"],
		[59, 14, 53.34246, -6.25402, "evidence/59_virus.html", imageIcon, "virus picture"],
		[60, 8, 53.34394, -6.25656, "evidence/60_book_of_kells.html", imageIcon, "Book of Kells"],
		[61, 18, 53.3427, -6.25289, "evidence/61_bottled_water.html", imageIcon, "bottled water poster"],
		[62, 15, 53.34474, -6.25433, "evidence/62_dustmasks.html", imageIcon, "poster of dust masks"],
		[63, 12, 53.34411, -6.25627, "evidence/63_syringe.html", imageIcon, "syringe"],
		[64, 21, 53.34231, -6.25123, "evidence/64_bloodsample.html", imageIcon, "vial of blood"],
		[65, 12, 53.34462, -6.25624, "evidence/65_diary4.html", imageIcon, "diary 4"],
		[66, 13, 53.34419, -6.25525, "evidence/66_evac_med_centre.html", imageIcon, "evacuation notice"],
		[67, 19, 53.34431, -6.25171, "evidence/67_diary5.html", imageIcon, "diary 5"],
		[68, 5, 53.34399, -6.25768, "evidence/68_classified_relocate.html", imageIcon, "classified notice"],
		[69, 14, 53.34292, -6.25456, "evidence/69_research_report_stage2.html", imageIcon, "research report"],
		[70, 14, 53.34277, -6.2548, "evidence/70_Experimental_Trial2.html", imageIcon, "testing report 2"],
		[71, 13, 53.34434, -6.25572, "evidence/71_classified_rivera.html", imageIcon],
		[72, 6, 53.34526, -6.25743, "evidence/72_diary6.html", imageIcon, "diary 6"],
		[73, 4, 53.34484, -6.25798, "evidence/73_this_is_the_end.html", imageIcon, "'This is the end...'"],
		[74, 14, 53.34284, -6.25381, "evidence/74_biohazard.html", imageIcon, "case"],
		[75, 11, 53.34341, -6.25616, "evidence/75_Faulkner3.html", imageIcon, "Axel medical report 3"],
		[76, 23, 53.3432, -6.2504, "evidence/76_Stage3.html", imageIcon, "stage 3"],
		[77, 9, 53.345, -6.25709, "evidence/77_grave_video.html", filmIcon, "grave attack"],
		[78, 2, 53.34401, -6.25808, "evidence/78_chase_video.html", filmIcon, "chase video"],
		[79, 16, 53.34422, -6.25236, "evidence/79_kyleVid.html", filmIcon, "night vision - zombies chasing a survivor"],
		[80, 11, 53.3434, -6.25584, "evidence/80_Infirmary.html", filmIcon, "infirmary"],
		[81, 17, 53.34217, -6.25323, "evidence/81_cctv1.html", imageIcon, "CCTV 1"],
		[82, 6, 53.34505, -6.25737, "evidence/82_zombie_pic.html", imageIcon, "zombie photo"],
		[83, 0, 53.34447, -6.25895, "evidence/83_newsreport_outbreak.html", imageIcon, "news report of outbreak"],
		[84, 13, 53.34419, -6.2557, "evidence/84_berkeley_cctv.html", filmIcon, "CCTV 3"],
		[85, 18, 53.3426, -6.25289, "evidence/85_CCTVToilet.html", filmIcon, "CCTV 2"],
		[86, 3, 53.34453, -6.2585, "evidence/86_howtokill3.html", imageIcon, "how to kill - step 3"],
		[87, 15, 53.34481, -6.25415, "evidence/87_howtokill2.html", imageIcon, "how to kill - step 2"],
		[88, 11, 53.34369, -6.25608, "evidence/88_how_to_kill1.html", imageIcon, "how to kill - step 1"],
		[89, 3, 53.34446, -6.2583, "evidence/89_blowupdublin.html", imageIcon, "blow up Dublin"],
		[90, 3, 53.34447, -6.25857, "evidence/90_aimforhead.html", imageIcon, "aim for head"],
		[91, 7, 53.34327, -6.25723, "evidence/91_dublin_map.html", imageIcon, "Dublin map"],
		[92, 2, 53.34412, -6.25798, "evidence/92_trinity_evac_map.html", imageIcon, "Trinity evacuation map"],
		[93, 4, 53.3447, -6.25816, "evidence/93_aegis_report1.html", imageIcon, "double aegis report 1"],
		[94, 19, 53.34435, -6.25205, "evidence/94_aegis_report2.html", imageIcon, "double aegis report 2"],
	];
//end of load data for markers/evidences

//add markers and marker events
	function add_marker(targetBounds, points){
		var marker = [];
		var i;
		
		for (i=0;i<points.length;i++){
			//define a function to change the icons based on if the user has viewed the item or not
			var changeIcon = function(){			
				var evidence = getViewedEvidence();
				
				if (evidence[i] == false){
					return points[i][5];
				} else {
					switch (points[i][5]){
						case imageIcon:
							return imageIconFound;
							break;
						case audioIcon:
							return audioIconFound;
							break;
						case filmIcon:
							return filmIconFound;
							break;
						};
				};
			}
			//end of function to change icons

			//add icons if points contained in clicked polygon
			if (targetBounds.contains([points[i][2], points[i][3]])){
				marker[i] = new L.marker([points[i][2], points[i][3]],{icon:changeIcon(),win_url:points[i][4]});
				marker[i].addTo(map);
		
				//if the item is viewed, provide relevant info when the icon is hovered over
				//evidence = getViewedEvidence();
				//if (evidence[i] == true){
				//	marker[i].bindPopup('<p>' + "Evidence # " + points[i][0].toString() + ': ' + points[i][6] + '</p>');
				//	marker[i].on('mouseover', function(e){
				//		this.openPopup();
				//	});
				//	marker[i].on('mouseout', function(e){
				//		this.closePopup();
				//	});
				//};
				//end of providing relevant info for discovered item
				
				//solution 2 - not working
//				evidence = getViewedEvidence();
//				if (evidence[i] == true){
//					showText = "Evidence #" + points[i][0].toString() + ": " + points[i][6];					
//					marker[i].on('mouseover', function(e){
//						var popup = $("<div></div>", {
//							id:"popup-evidence",
//							class:"popup-map",
//						});	
//						var hed = $("<div></div>",{
//							text:showText
//						}).appendTo(popup);
//						popup.appendTo("#map");
//					});
					
//					marker[i].on('mouseout', function(e){
//						$("#popup-evidence").remove();
//					});
//				};

				marker[i].on('click',markerClick);
			};
			//end of add icons if in polygons	
		};
	}

	function markerClick(e){
		//window.open(this.options.win_url,"_blank"); //open in a new tab
		window.open(this.options.win_url, "_self"); //open in the same tab
	}
//end of add markers and marker events

//Create an empty layer to load the polygons
var featureLayer = new L.GeoJSON();

//define a function to count how many evidences have been already looked at in a particular building
// it returns an array: buildingCounter
	var countEvidence = function(){
		evidence = getViewedEvidence();
		var i;
		var buildingCounter = Array.apply (null, new Array(24)).map(Number.prototype.valueOf, 0);
		for (i=0; i<points.length; i++){
			if (evidence[i] === true){
				buildingCounter[points[i][1]]++;
			}
		};
		return buildingCounter;
	}
//end of function to count number of evidences checked in a building

//set the styles and events of the polygons
	var onEachFeature = function(feature, layer) {

		(function(layer, properties){

			//define a function to style polygons according to - the building is "cleared" or not (color change)
			var stylePolygons = function(){
				var buildingCounter = countEvidence();
				var itemNum = feature.properties.ITEMNUM;
				if (itemNum == buildingCounter[feature.properties.ID]){
					layer.setStyle(unlockedStyle);
					} else {
					layer.setStyle(defaultStyle);
					}
				};
			//end of function to style polygons
			
			stylePolygons();
		
			//mouseover event of polygon - show names of buildings
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
					var targetBounds = e.target.getBounds()
					map.fitBounds(targetBounds);

					add_marker(targetBounds, points);				
					
					map.removeLayer(featureLayer);
					$("#popup-"+properties.ID).remove();
				
				});
			});
			
			//create a mouseout event that undoes the mouseover changes
			layer.on("mouseout",function(e){
				stylePolygons();				
				$("#popup-"+properties.ID).remove();
			});
			
		})(layer, feature.properties);
	};
//end of set the style on the polygons

//Add the GeoJSON to the layer, which is loaded in the <head>
	var featureLayer = L.geoJson(boundaries, {
		onEachFeature: onEachFeature});

	map.addLayer(featureLayer);

//Add explanation 	
//What to do when get to stage5

//for development
//		var popup = L.popup();
//		function onMapClick(e) {
//			popup
//				.setLatLng(e.latlng)
//				.setContent("You clicked at " + e.latlng.toString())
//				.openOn(map);
//		}
//		map.on('click', onMapClick);
//end of for development
