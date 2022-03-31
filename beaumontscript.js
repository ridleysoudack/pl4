var map = L.map('map').setView([53.828, -101.800], 3); // This initializes the map at chosen coordinates.

// The tile layer here is the basemap. In this case, it is from Mapbox and requires a mapbox  access token to load.
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmlkbGV5c291ZGFjayIsImEiOiJjbDEzemw4NmEwcHFtM2pwd212OG9qbXExIn0.h69sH0OHX-hJ3rUm_nZxAg'
}).addTo(map);

// This uses the L.Geoserver script to easily call and format my layer.
var wfsLayer = L.Geoserver.wfs("http://rsoudackgeoserv.duckdns.org/geoserver/wfs", {
  layers: "fleming:treelocalv2",
});

wfsLayer.addTo(map);