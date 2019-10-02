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
  state: {
    a: 123,
    b: 456,
    singleInstanceLock: null
  },
  mutations: {
    data(state, a) {
      state.singleInstanceLock = a;
    }
  }
});

Vue.mixin({
  // Define global functions
  methods: {
    Send: (value: any, args: any = null) => {
      ipcRenderer.send("ipc", {
        method: value,
        data: args
      });
    },

    Once: (ipcName: string, Callback: (response: any) => void) => {
      ipcRenderer.once(ipcName, (event: object, response: any) => {
        Callback(response);
      });
    },

    On: (ipcName: string, Callback: (response: any) => void) => {
      ipcRenderer.on(ipcName, (event: object, response: any) => {
        Callback(response);
      });
    },

    Read: function(key) {
      return this.$store.state[key]; // Retrieve data from the global data store
    },

    Write: function(key, val) {
      this.$store.commit(key, val); // Write data to the global data store
    }
  }
});

new Vue({
  router,
  store,
  render: (a) => a(App),
}).$mount("#app");
