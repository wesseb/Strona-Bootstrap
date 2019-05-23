function mapa() {
    var mapProp= {
        center:new google.maps.LatLng(53.7002803,17.5733059),
        zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
        position:new google.maps.LatLng(53.7002803,17.5733059),
        animation:google.maps.Animation.BOUNCE
    });

    marker.setMap(map);
}
