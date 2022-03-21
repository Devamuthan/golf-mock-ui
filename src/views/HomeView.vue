<template>
    <div class="home">
        <div class="nav-bar">
            <div>
                Welcome Back
            </div>
            <div class="logout">
                <button @click="logout">Logout</button>
            </div>
        </div>

        <div class="articles">
            <ArticleComponent v-for="article in articles" v-bind:article="article" v-bind:key="article.key" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {getAuth} from "firebase/auth";
import Auth from "@/api/auth";
import Articles from "@/api/articles";
import ArticleComponent from "@/components/ArticleComponent.vue";

export default Vue.extend({
    name: 'HomeView',
    components: {ArticleComponent},
    data() {
      return {
          articles: []
      }
    },
    methods: {

        // Logout method
        logout() {
            // Calling the logout function with a callback function to redirect to login page on success
            Auth.logout(async () => {
                await this.$router.push('/');
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
        Articles.getTestData()
        .then(res => {
            console.log(res);
            this.articles = res.data.articles;
        })
        .catch(err => {
            console.log(err);
        })
    }
});
</script>
