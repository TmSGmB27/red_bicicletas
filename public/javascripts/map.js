var map = L.map('main_map').setView([4.579524, -74.157496], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([4.579524,-74.157496]).addTo(map);
L.marker([4.582671,-74.158065]).addTo(map);
L.marker([4.584111,-74.159323]).addTo(map);