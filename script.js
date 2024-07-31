let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.669377, lng: 23.327377 },
        zoom: 13,
    });
}

window.initMap = initMap;

let navbar = document.querySelector('.navbar ul');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}