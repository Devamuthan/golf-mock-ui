<template>
    <div class="container">
        <form @submit.prevent="login">
            <div class="title">
                Login
            </div>
            <div class="field">
                <!--                <label>Enter Email</label>-->
                <input v-model="email" placeholder="Email id" type="text"/>
            </div>
            <div class="field">
                <!--                <label>Enter Password</label>-->
                <input v-model="password" placeholder="Password" type="password"/>
            </div>
            <button class="login-button">Login</button>
            <div class="link">
                <router-link to="/sign-up">
                    Don't have an account?
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { getAuth } from 'firebase/auth'
import Auth from "@/api/auth";

export default {
    name: "LoginView",
    methods: {
        login() {
            // Calling the login method with a callback function that would redirect to dashboard on success
            Auth.login(this.email, this.password, async () => {
                await this.$router.push('/dashboard');
            })
        },
    },
    data() {
        return {
            email: "",
            password: "",
        }
    },
    beforeRouteEnter( to, from, next ) {
        // Login route guard
        const auth = getAuth();
        if ( auth.currentUser ) {
            // If the user is already logged in, then the user should be redirected to dashboard page
            next( '/dashboard' );
        } else {
            // If the user is not already logged in, then continue to render the login component
            next();
        }
    }
}
</script>

<style scoped>

.container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

form {
    height: 350px;
    width: 500px;
    background: #fff;
    /*border: 1px solid #000;*/
    border-radius: 5px;
    box-shadow: 0 4px 5px 5px lightgrey;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
}

.title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
}

.field {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.field input {
    height: 100%;
    width: 350px;
    border-radius: 5px;
    padding-left: 10px;
    outline: none;
    border: 1px solid lightgrey;
}

.login-button {
    height: 50px;
    width: 200px;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    background: #000;
    color: #fff;
    font-size: 15px;
    transition: 0.25s linear;
}

.login-button:hover {
    width: 250px;
    background: #fff;
    color: #000;
    border: 1px solid #000;
}

.link a {
    text-decoration: none;
    color: #6b8dce;
}

</style>