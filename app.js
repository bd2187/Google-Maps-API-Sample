// This is the cb function that will be called once the API request is successful
function initMap() {
   var uluru = {lat: -25.363, lng: 131.044};

   // Construct new Google Maps object.
   var map = new google.maps.Map(document.getElementById('map'), {
     // Add properties to the map including the center and zoom level

     // zoom property specifies the zoom level for the map
     zoom: 4,

     // center property tells the API where to center the map.
     center: uluru
   });

   // Put marker on map. Position property sets position of marker
   var marker = new google.maps.Marker({
     position: uluru,
     map: map
   });

   console.log(marker)
   console.log(google)
}
