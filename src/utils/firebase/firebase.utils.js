import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'; 

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        }
        catch(error){
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
};
