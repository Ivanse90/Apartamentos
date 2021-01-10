var map = L.map('map',{zoomControl: false},{preferCanvas: true}).setView([4.715, -74.0602], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//Pan Tool
L.control.pan({position:'topright'}).addTo(map);
//Zoom Extense
var zoomHome = L.Control.zoomHome();
zoomHome.addTo(map);
//Zoom  Box
L.Control.boxzoom({position:'topleft'}).addTo(map);
//Marquer in map
var marker=L.marker([4.7062, -74.069]).addTo(map).bindPopup('Humedal Cordoba c1');
var marker=L.marker([4.7160, -74.071]).addTo(map).bindPopup('Niza c2');
var marker=L.marker([4.7172, -74.070]).addTo(map).bindPopup('Niza c3');
var marker=L.marker([4.7264, -74.067]).addTo(map).bindPopup('Colina Campestre c4');
var marker=L.marker([4.7282, -74.0658]).addTo(map).bindPopup('Colina Campestre c5');
var marker=L.marker([4.7248, -74.0638]).addTo(map).bindPopup('Colina Campestre c6');
var marker=L.marker([4.7205, -74.0484]).addTo(map).bindPopup('Alcala c7');

//scale tool    
L.control.scale().addTo(map);
// measure tool
var measureControl = new L.Control.Measure();
measureControl.addTo(map);
L.control.polylineMeasure({position:'topright'}).addTo(map);
//localization 
L.control.locate({position:'topright'}).addTo(map);
//draw marker
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);
var drawControl = new L.Control.Draw({
    draw: {
        polyline: true,        
        polygon: true,
        rectangle: true,
        circle: true,
        marker: true},
    edit: {
        featureGroup: drawnItems
    }    
});
map.addControl(drawControl);

map.on(L.Draw.Event.CREATED, function (event) {
    var layer = event.layer;

    drawnItems.addLayer(layer);
});

//Geojson
var vecinos = L.geoJson(Ofertas,{"color": "#C70039" }).addTo(map);