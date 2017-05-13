
// This is the cb function that will be called once the API request is successful
function initMap() {
  var sfCoords = {lat: 37.773972, lng: -122.431297};

  // Construct new Google Maps object.
  var map = new google.maps.Map(document.getElementById('map'), {
   // Add properties to the map including the center and zoom level
   center: sfCoords, // center property tells the API where to center the map.
   zoom: 12 // zoom property specifies the zoom level for the map
  });

  // Put marker on map. Position property sets position of marker
  var marker = new google.maps.Marker({
   position: sfCoords,
   map: map,
   title: 'First marker'
  });

  var infowindow = new google.maps.InfoWindow({
    content: 'SF'
  });

  marker.addListener('click', function(){
    infowindow.open(map, marker);
  });


}
