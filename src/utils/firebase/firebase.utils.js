import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBTL-OiC6ocjNDxo_2Mhd0-HWiqw2stn-E",
    authDomain: "gold-crown-db.firebaseapp.com",
    projectId: "gold-crown-db",
    storageBucket: "gold-crown-db.appspot.com",
    messagingSenderId: "649001054242",
    appId: "1:649001054242:web:349093bd97da0c87249a7b"
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
