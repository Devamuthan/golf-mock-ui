import firebase from "firebase/compat/app"
import {getAuth} from "firebase/auth";
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import firebaseConfig from "@/config/firebaseConfig";

console.log(process.env.VUE_APP_FIREBASE_API_KEY)

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

let app: Vue;

const auth = getAuth();

// eslint-disable-next-line
axios.interceptors.request.use(async (config: any) => {

    // Adding Bearer Token to authorization header
    if(config.url === '/articles'){
        config.headers.Authorization = `Bearer ${await auth.currentUser?.getIdToken()}`;
    }
    config.url = process.env.VUE_APP_ROOT_URL + config.url;
    return config
})

// Rendering the app only when the firebase auth statechange is caught or when the data is available
auth.onAuthStateChanged(() => {
  // console.log(user);
    if(!app) {
      app = new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    }
})


