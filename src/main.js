import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import "leaflet/dist/leaflet.css";

import router from "./router";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const app = createApp(App);

app.use(router);

app.mount("#app");
