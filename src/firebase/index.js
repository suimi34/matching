import firebaseConfig from "./config";
import * as firebase from "firebase";

const fC = {
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  databaseURL: firebaseConfig.databaseURL,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId
};

const firebaseApp = firebase.initializeApp(fC);
firebaseApp.auth().languageCode = "JP";

export { firebaseApp };
