import firebase from "firebase/compat/app"
import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import axios from "axios";
import apiConstants from "@/constants/apiConstants";
import firebaseConfig from "@/config/firebaseConfig";

firebase.initializeApp(firebaseConfig);

export default class Auth {
    private static auth = getAuth();
    public static login = (email: string, password: string, next: any): void => {
        // Calling the signInWithEmailAndPassword method from firebase/auth to log in
        signInWithEmailAndPassword(this.auth, email, password)
            // eslint-disable-next-line
            .then((userCredential) => {
                // console.log( userCredential );
                // On successful authentication, callback function is executed
                next();
            })
            .catch((error) => {
                // Log the errors if any
                alert(error.message);
            })
    }

    public static signup = (data: NewUser, next: any): void => {
        axios.post(apiConstants.SIGN_UP, data)
            .then(res => {
                if (res.status === 200) {
                    signInWithEmailAndPassword(this.auth, data.email, data.password)
                        // eslint-disable-next-line
                        .then((userCredential) => {
                            // On successful authentication, callback function is executed
                            next();
                        })
                        .catch((error) => {
                            // Log the errors if any
                            alert(error.message);
                        })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    public static logout = (next: any) => {
        // Calls the logout method from firebase/auth
        signOut(this.auth)
            .then(() => {
                // Executing the callback function on success
                next();
            })
            .catch((error) => {
                // print the error if any
                alert(error.message);
            })
    }
}

interface NewUser {
    email: string;
    phoneNumber: string;
    password: string;
    firstName: string;
    lastName: string;
    photoURL: string;
}