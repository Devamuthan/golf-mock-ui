import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/compat/app"
import {getAuth} from "firebase/auth";
import VueResource from 'vue-resource';
import axios from "axios";

// Firebase config
const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: "golf-mock.firebaseapp.com",
    projectId: "golf-mock",
    storageBucket: "golf-mock.appspot.com",
    messagingSenderId: "232919910225",
    appId: "1:232919910225:web:0f26b4c31ddeaf7db33570"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

let app: Vue;

const auth = getAuth();

Vue.use(VueResource);

// Vue.http.interceptors.push(function (request: any, next: any) {
//     console.log('Before adding url: ' + request.url);
//     request.url = process.env.VUE_APP_ROOT_URL + request.url;
//     console.log('After adding url: ' + request.url);
//
//     next();
// })

// eslint-disable-next-line
axios.interceptors.request.use((config: any) => {
    config.url = process.env.VUE_APP_ROOT_URL + config.url;
    console.log(config.data);
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


