document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([4.60971, -74.08175], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker = L.marker([4.699710, -74.091750]).addTo(map);
    marker.bindPopup("<b>Páramo de Sumapaz</b><br>Cóndor Andino").openPopup();
    
    var marker2 = L.marker([4.6934710, -74.191750]).addTo(map);
    marker2.bindPopup("<b>Páramo de Sumapaz</b><br>Cóndor Andino").openPopup();
});