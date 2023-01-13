<template>
  <main class="pade">
    <div ref="mapContainer" class="map"></div>
  </main>
</template>

<script>
const L = require("leaflet");
export default {
  name: "MapaViev",

  data() {
    return {
      mapCurrent: {},
      locations: [],
    };
  },
  methods: {
    createMapInstans() {
      const map = L.map(this.$refs.mapContainer, {
        preferCanvas: true,
      }).setView([50.450001, 30.523333], 13);
      const mapLayer = L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      );
      map.addLayer(mapLayer);
      this.mapCurrent = map;
      map.on("dblclick", this.onMapClick);
      return map;
    },

    onMapClick(e) {
      var coords = e.latlng;
      var popupContent =
        '<form id="form"> <h1>My marker</h1>' +
        "<div>" +
        `<div> <strong>coords: </strong> ${coords.lat.toFixed(6)} </div>` +
        `<div> <strong>coords: </strong> ${coords.lng.toFixed(6)} </div>` +
        "</div>" +
        "<p>Name marker   </p>" +
        `<input type="text" id="lat" name="lat"/>` +
        '<br><input type="button" id="button" value="Add marker">' +
        "</form>";

      let popup = L.popup();
      let title;

      popup
        .setLatLng(e.latlng)
        .setContent(popupContent)
        .openOn(this.mapCurrent);

      let input = document.getElementById("lat");

      input.oninput = function () {
        title = input.value;
      };

      let button = document.getElementById("button");

      button.onclick = () => this.createMarker(e.latlng, title);
    },

    createMarker(coords, title) {
      this.locations = [...this.locations, { coords, title }];

      let parsed = JSON.stringify(this.locations);
      localStorage.setItem("locations", parsed);

      L.marker([coords.lat, coords.lng], { title: this.title }).addTo(
        this.mapCurrent
      );
      // window.location = window.location.href;
    },

    addMarkers() {
      let localData = JSON.parse(localStorage.getItem("locations"));
      for (let i = 0; i < localData.length; i++) {
        L.marker([localData[i].coords.lat, localData[i].coords.lng], {
          title: localData[i].title,
        }).addTo(this.mapCurrent);
      }
    },
  },

  mounted() {
    this.createMapInstans();
    this.addMarkers();
    this.locations = JSON.parse(localStorage.getItem("locations")) || [];
  },
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 500px;
}
</style>
