// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a center and zoom level.
// let map = L.map("mapid").setView([36.1733, -120.1794], 7);

// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([40.7, -94.5], 4);

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6214, -122.3790], 5);

// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6214, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
// ];

// Coordinates Skill Drill, SFO - AUS - YYZ - JFK.
let line = [
    [37.6214, -122.3790],
    [30.1975, -97.6664],
    [36.1988, -95.8839],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: '5,5'
}).addTo(map);

// Get data from cities.js
let cityData = cities;

//  Add a marker to the map for Los Angeles, California.
let marker = L.circle([34.0522, -118.2437], {
    radius: 100
}).addTo(map);

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function (city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population / 200000,
//         lineweight: 4,
//         color: "orange",
//         fillColor: "orange"
//     })
//         .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//         .addTo(map);
// });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,    
    accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.
<<<<<<< HEAD
streets.addTo(map);

=======
streets.addTo(map);
>>>>>>> Mapping_GeoJSON_Points
