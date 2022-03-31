var map = L.map('map').setView([51.505, -0.09], 13); // This initializes the map at chosen coordinates.

// The tile layer here is the basemap. In this case, it is from Mapbox and requires a mapbox  access token to load.
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmlkbGV5c291ZGFjayIsImEiOiJjbDEzemw4NmEwcHFtM2pwd212OG9qbXExIn0.h69sH0OHX-hJ3rUm_nZxAg'
}).addTo(map);