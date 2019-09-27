import Vue from "vue";
import Router from "vue-router";
import Vuex from "vuex";
import VueCompositionApi from "@vue/composition-api";
import App from "./App.vue";
import Home from "./views/Home.vue";
// import "./registerServiceWorker";
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
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "./views/About.vue"),
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
    Send: (value: any, data: any) => {
      ipcRenderer.send(value, data);
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
