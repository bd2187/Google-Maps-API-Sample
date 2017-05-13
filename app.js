// // This is the cb function that will be called once the API request is successful
// function initMap() {
//   var sfCoords = {lat: 37.773972, lng: -122.431297};
//
//   // Construct new Google Maps object.
//   var map = new google.maps.Map(document.getElementById('map'), {
//    // Add properties to the map including the center and zoom level
//    center: sfCoords, // center property tells the API where to center the map.
//    zoom: 12 // zoom property specifies the zoom level for the map
//   });
//
//   // Put marker on map. Position property sets position of marker
//   var marker = new google.maps.Marker({
//    position: sfCoords,
//    map: map,
//    title: 'First marker'
//   });
//
//   var infowindow = new google.maps.InfoWindow({
//     content: 'SF'
//   });
//
//   marker.addListener('click', function(){
//     infowindow.open(map, marker);
//   });
// }


// === With Geolocation:
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'),{
    center: {lat: -34.397, lng: 150.644},
    zoom: 12
  });

  function success(position) {
    var pos = { lat: position.coords.latitude, lng: position.coords.longitude };
    var marker = new google.maps.Marker({
      position: pos,
      map: map
    });

    map.setCenter(pos);
  }

  function fail(browserHasGeolocation, infoWindow, pos) {
    infowindow.setPosition(pos);
    infowindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infowindow.open(map);
  }

  // check if geolocation is available in user's browser
  return navigator.geolocation
    ? navigator.geolocation.getCurrentPosition(success, fail)
    : fail(false, infowindow, map.getCenter());
}
