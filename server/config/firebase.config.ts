// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as dotenv from 'dotenv'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default{
    firebaseConfig:{
        apiKey: "AIzaSyANuQPJNcjR6A3SqOmU5hfeW7Dj8RHnA_w",
        authDomain: "academicarchives-baa5b.firebaseapp.com",
        projectId: "academicarchives-baa5b",
        storageBucket: "academicarchives-baa5b.appspot.com",
        messagingSenderId: "727248629444",
        appId: "1:727248629444:web:627acde7946136a207e391",
        measurementId: "G-RW9QVPNG6R"
    }
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);