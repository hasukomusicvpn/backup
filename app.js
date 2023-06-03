
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";



const firebaseConfig = {
    apiKey: "AIzaSyBWPCV6rYquQmpWa_TaLXr-YRKYjsXyXqM",
    authDomain: "fir-01-9ed61.firebaseapp.com",
    projectId: "fir-01-9ed61",
    storageBucket: "fir-01-9ed61.appspot.com",
    messagingSenderId: "316672678531",
    appId: "1:316672678531:web:4c8421026df75336e619b6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.getElementById("createAccount").onclick = () => {
    createUserWithEmailAndPassword(auth, "khoa@gmail.com", "123456789")
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            console.log("user: ", user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error:", errorMessage);
        })
};




document.getElementById("logIn").onclick = () => {
    signInWithEmailAndPassword(auth, "khoa@gmail.com", "123456789")
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage2 = error.message;
            console.log(errorMessage2);
        });
}

document.getElementById("signOut").onclick = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        alert("User signed out");
    }).catch((error) => {
        // An error happened.
    });
}


onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("User Signed In!");
        // ...
    } else {
        // User is signed out
        console.log("User signed out");
        // ...
    }
});
