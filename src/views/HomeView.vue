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
import axios from "axios";

export default Vue.extend({
    name: 'HomeView',
    methods: {

        // Logout method
        logout() {
            const auth = getAuth();

            // Calls the logout method from firebase/auth
            signOut(auth)
                .then(() => {
                    // Redirect to login or main page on successful logout
                    this.$router.push('/');
                })
                .catch((error) => {
                    // print the error if any
                    alert(error.message);
                })
        }
    },
    async beforeRouteEnter(to, from, next) {
        const auth = await getAuth();

        // Login route guard to check if the user is logged in
        if (await auth.currentUser) {
            // If the user is logged in, then render the component
            next();
       } else {
            alert('Yoy are not logged in');
            // If the user is not logged in, then redirect to login page
            next({path: '/'})
        }
    },
    mounted() {
        axios.get('/articles')
        .then(res=> {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
});
</script>
