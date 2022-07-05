import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWvFpGoFO-s4v14osWczOGFuybjhb7org",
  authDomain: "instagramclone-6719d.firebaseapp.com",
  databaseURL: "https://instagramclone-6719d-default-rtdb.firebaseio.com",
  projectId: "instagramclone-6719d",
  storageBucket: "instagramclone-6719d.appspot.com",
  messagingSenderId: "905472048341",
  appId: "1:905472048341:web:10f52e4f4c0e4f364af65c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

