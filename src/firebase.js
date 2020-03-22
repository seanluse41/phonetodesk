
import firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyC-ugovclZUAXy5PVRR6tZ4HRgtJf04oHQ",
    authDomain: "phone-to-web.firebaseapp.com",
    databaseURL: "https://phone-to-web.firebaseio.com",
    projectId: "phone-to-web",
    storageBucket: "phone-to-web.appspot.com",
    messagingSenderId: "178162722147",
    appId: "1:178162722147:web:9173bcad65ebd1eb269f56"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();