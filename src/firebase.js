// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAbunimEhJyuIzlf4O2A6n2jOFHpG1Pq2U",
    authDomain: "codes882.firebaseapp.com",
    projectId: "codes882",
    storageBucket: "codes882.appspot.com",
    messagingSenderId: "994652701486",
    appId: "1:994652701486:web:483da17949dced56dbf0bf",
    measurementId: "G-Y0B8F8GHTQ"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};
  // export default firebase;