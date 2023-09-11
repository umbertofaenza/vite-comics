import { createApp } from "vue";
import App from "./App.vue";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// fa icons
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faPinterest,
  faPeriscope,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookF, faTwitter, faYoutube, faPeriscope, faPinterest);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
