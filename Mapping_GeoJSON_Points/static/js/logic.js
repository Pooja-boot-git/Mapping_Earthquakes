

//var airportInfo = L.layerGroup(airports);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Add GeoJSON data.
let map = L.map('mapid',{
center: [30,30],
zoom: 2,
layers: [streets]
});

//var overlayMaps = {
// "Airports": airportInfo
//};
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

let airportData = "https://raw.githubusercontent.com/Pooja-boot-git/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
  //L.geoJSON(data).addTo(map);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data,{
  onEachFeature: function(feature,layer){
  //return L.marker()
  layer.bindPopup("<h2>" + "Airport code: " + feature.properties.id + "</h2> <hr> <h3>"+ "Name: " + feature.properties.name + "</h3>")
  .addTo(map)
}
})});

//});


