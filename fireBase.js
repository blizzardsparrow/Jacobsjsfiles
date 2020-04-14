var app_fireBase = {};
(function(){
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyA9hj44Iwqx1Mf-i8EV1c0O8GenoyUWHh0",
        authDomain: "authtest-1be43.firebaseapp.com",
        databaseURL: "https://authtest-1be43.firebaseio.com",
        projectId: "authtest-1be43",
        storageBucket: "authtest-1be43.appspot.com",
        messagingSenderId: "1003505624197",
        appId: "1:1003505624197:web:7f2e432108a2ef895b75ec",
        measurementId: "G-WGTEBQE9Z2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    app_fireBase = firebase;

})()