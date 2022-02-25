import { createApp } from "vue";
import App from "./App.vue";

// Middleware
import { store } from "./store";
import { router } from "./router";
import { TroisJSVuePlugin } from "troisjs";

// Utils
import Loader from "./components/utils/Loader";
import LoadBlender from "./components/utils/LoadBlender";

createApp(App)
    .use(store)
    .use(router)
    .use(TroisJSVuePlugin)
    .component("Loader", Loader)
    .component("LoadBlender", LoadBlender)
    .mount("#app");
