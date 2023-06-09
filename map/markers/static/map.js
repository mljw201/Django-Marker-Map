const copy = "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors";
const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const layer = L.tileLayer(url, { attribution: copy });
const map = L.map("map", { layers: [layer], minZoom: 5 });
map.locate()
    .on("locationfound", (e) => map.setView(e.latlng, 15))
    .on("locationerror", () => map.setView([50.736372, -3.533796], 16));

async function load_markers() {
    const markers_url = `/api/markers/?in_bbox=${map
        .getBounds()
        .toBBoxString()}`;
    const response = await fetch(markers_url);
    const geojson = await response.json();
    return geojson;
}

async function render_markers() {
    const markers = await load_markers();
    L.geoJSON(markers)
        .bindPopup((layer) => layer.feature.properties.name)
        .addTo(map);
}

map.on("moveend", render_markers);