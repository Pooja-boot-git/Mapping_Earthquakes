// center of the map set to SFO
var map = L.map('mapid',{
    center: [37.6213, -122.3790],
    zoom: 5});

//Los Angeles International Airport (LAX) TO San Francisco International Airport (SFO),
//Intermediate point: Salt Lake City International Airport (SLC) 
// ending point: Seattle-Tacoma ,
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  dashArray: "4 4",
  dashOffset: "20"
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// adding maker to our map
//var marker = L.marker([34.0522, -118.2437]).addTo(map);

//circle.bindPopup("I am a circle.");
//polygon.bindPopup("I am a polygon.");