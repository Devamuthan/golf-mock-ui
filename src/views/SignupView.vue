<template>
    <div class="container">
        <form @submit.prevent="submitForm">
            <div class="title">
                Signup
            </div>
            <div class="field">
                <!--                <label>Enter Email</label>-->
                <input v-model="email" placeholder="Email id" type="text"/>
            </div>
            <div class="field">
                <!--                <label>Enter Password</label>-->
                <input v-model="password" placeholder="Password" type="password"/>
            </div>
            <div class="field">
                <!--                <label>Enter Password</label>-->
                <input v-model="phoneNumber" placeholder="Phone NUmber" type="text"/>
            </div>
            <div class="field">
                <!--                <label>Enter Password</label>-->
                <input v-model="firstName" placeholder="First Name" type="text"/>
            </div>
            <div class="field">
                <!--                <label>Enter Password</label>-->
                <input v-model="lastName" placeholder="Last Name" type="text"/>
            </div>
            <button class="login-button">Sign Up</button>
            <div class="link">
                <router-link to="/">
                    Already have an account?
                </router-link>
            </div>
        </form>
        <div>
            {{ email + " " + password + " " + phoneNumber + " " + firstName + " " + lastName }}
        </div>
    </div>
</template>

<script>
export default {
    name: "SignupView",
    methods: {
        submitForm() {
            alert( 'poda' );
        }
    },

    data() {
        return {
            email: "",
            phoneNumber: "",
            password: "",
            firstName: "",
            lastName: "",
            photoURL: "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png"
        }
    }
}
</script>

<style scoped>

.container{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

form{
    height: 560px;
    width: 500px;
    background: #fff;
    /*border: 1px solid #000;*/
    border-radius: 5px;
    box-shadow: 0px 4px 5px 5px lightgrey;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
}

.title{
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
}

.field{
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.field input{
    height: 100%;
    width: 350px;
    border-radius: 5px;
    padding-left: 10px;
    outline: none;
    border: 1px solid lightgrey;
}

.login-button{
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

.login-button:hover{
    width: 250px;
    background: #fff;
    color: #000;
    border: 1px solid #000;
}

.link a{
    text-decoration: none;
    color: #6b8dce;
}
</style>