/*! Funky Google Maps scripts

-- Latitude /Longitude for addresses are:
396 Congress Park Drive  Dayton, OH 45459          - (39.630159, -84.175937)
18201 Von Karman Ave, Irvine, CA 92612             - (33.677705, -117.852974)
27 Old Glouchester Street, London, UK WC1N3XX      - (51.520614, -0.121825)
*/
function initialize() {
  var myLatlngOH = new google.maps.LatLng(39.630159,-84.175937);
  var myLatlngCA = new google.maps.LatLng(33.677705,-117.852974);
  var myLatlngUK = new google.maps.LatLng(51.520614,-0.121825);
  var mapOptionsOH = {
    zoom: 5,
    center: myLatlngOH,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: 0
  }
  var mapOptionsCA = {
    zoom: 5,
    center: myLatlngCA,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: 0
    }
  var mapOptionsUK = {
    zoom: 5,
    center: myLatlngUK,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: 0
    }

  var mapOH = new google.maps.Map(document.getElementById('map-OH'), mapOptionsOH);
  var mapCA = new google.maps.Map(document.getElementById('map-CA'), mapOptionsCA);
  var mapUK = new google.maps.Map(document.getElementById('map-UK'), mapOptionsUK);

  var markerOH = new google.maps.Marker({
      position: myLatlngOH,
      map: mapOH,
      title: 'Company Office - Ohio'
  });
  var markerCA = new google.maps.Marker({
      position: myLatlngCA,
      map: mapCA,
      title: 'Company Office - California'
  });      
  var markerUK = new google.maps.Marker({
      position: myLatlngUK,
      map: mapUK,
      title: 'Company Office - London'
  });
}  

google.maps.event.addDomListener(window, 'load', initialize);