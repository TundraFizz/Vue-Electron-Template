import Vue from "vue";
import Router from "vue-router";
import Vuex from "vuex";
import VueCompositionApi from "@vue/composition-api";
import App from "./app.vue";
import Main from "./views/main.vue";
import Settings from "./views/settings.vue";
import About from "./views/about.vue";
import {ipcRenderer} from "electron";

Vue.use(Router);
Vue.use(Vuex);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

const router = new Router({
  mode: "history", // There's also "abstract", but that mode sucks
  base: process.env.BASE_URL,
  routes: [{
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings
  },
  {
    path: "/about",
    name: "about",
    component: About
  }]
});

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}
});

// Define basic functions that allow easy usage of reading and writing from the data store
Vue.mixin({
  methods: {
    Send: (value: any, args: any = null) => {
      ipcRenderer.send("ipc", {
        method: value,
        data: args
      });
    },

    On: (ipcName: string, Callback: (res: any) => void) => {
      ipcRenderer.on(ipcName, (event: object, res: any) => {
        Callback(res);
      });
    }
  }
});

new Vue({
  router,
  store,
  render: (a) => a(App),
}).$mount("#app");
