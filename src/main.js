import { createApp } from "vue";
import App from "./App.vue";

// Middleware
import { store } from "./store";
import { TroisJSVuePlugin } from "troisjs";

// UI
import LoadingScreen from "./components/ui/LoadingScreen";

// Utils
import Loader from "./components/utils/Loader";
import LoadBlender from "./components/utils/LoadBlender";

createApp(App)
    .use(store)
    .use(TroisJSVuePlugin)
    .component("LoadingScreen", LoadingScreen)
    .component("Loader", Loader)
    .component("LoadBlender", LoadBlender)
    .mount("#app");
