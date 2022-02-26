import { createApp } from "vue";
import App from "./App.vue";

// Middleware
import { store } from "./store";
import { router } from "./router";
import { TroisJSVuePlugin } from "troisjs";

// Utils
import Loader from "./components/utils/Loader";
import LoadBlender from "./components/utils/LoadBlender";

// Utils
import MountainVisuals from "./components/mountain/MountainVisuals";
import MountainInfo from "./components/mountain/MountainInfo";
import Mountains from "./components/Mountains";

createApp(App)
    .use(store)
    .use(router)
    .use(TroisJSVuePlugin)
    .component("Loader", Loader)
    .component("MountainVisuals", MountainVisuals)
    .component("MountainInfo", MountainInfo)
    .component("Mountains", Mountains)
    .component("LoadBlender", LoadBlender)
    .mount("#app");
