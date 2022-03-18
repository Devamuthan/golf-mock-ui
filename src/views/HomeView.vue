<template>
    <div class="home">
        <div>
            Home page<br>you have been logged in successfully
        </div>
        <div>
            <button @click="logout">Logout</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {getAuth, signOut} from "firebase/auth";
import firebase from "firebase/compat/app";

export default Vue.extend({
    name: 'HomeView',
    methods: {
        logout() {
            const auth = getAuth();
            signOut(auth)
                .then(() => {
                    this.$router.push('/');
                })
                .catch((error) => {
                    alert(error.message);
                })
        }
    }
});

router.beforeEac((to, from, next) => {
    if(to.matched.some(record => record.meta.authRequired)) {
        if(firebase.auth().currentUser) {
            next();
        } else {
            alert('You must be logged in to see this page');
            next({
                path: '/'
            })
        }
    } else {
        next();
    }
})
</script>
