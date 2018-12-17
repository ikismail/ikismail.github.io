var marker;

function initMap() {

    var myLatLng = {lat: 12.985734, lng: 80.246155};
    var map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 4,
        scrollwheel: false,
        center: myLatLng
    });

    marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: myLatLng,
        title : "Mohammed Ismail"
    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
