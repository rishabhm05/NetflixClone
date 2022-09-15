import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmPMLiNbR19Zdt6jgEkyu5Mb1ln5rQnE4",
  authDomain: "netflixclone-ee81f.firebaseapp.com",
  projectId: "netflixclone-ee81f",
  storageBucket: "netflixclone-ee81f.appspot.com",
  messagingSenderId: "760581931168",
  appId: "1:760581931168:web:476a3e3d2e15c6261f89c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
