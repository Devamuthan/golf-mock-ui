import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/compat/app"
import {getAuth} from "firebase/auth";

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

// Rendering the app only when the firebase auth statechange is caught or when the data is available
auth.onAuthStateChanged(user => {
  console.log(user);
    if(!app) {
      app = new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    }
})


