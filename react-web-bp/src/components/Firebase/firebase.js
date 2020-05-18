import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDRGfCuKyoQCo7xEVXW_7dhSPLirlgPEjM",
    authDomain: "reactboiler-f23b5.firebaseapp.com",
    databaseURL: "https://reactboiler-f23b5.firebaseio.com",
    projectId: "reactboiler-f23b5",
    storageBucket: "reactboiler-f23b5.appspot.com",
    messagingSenderId: "1021405784599",
    appId: "1:1021405784599:web:374a38df23845af0e48a52",
    measurementId: "G-G680Z3LPLC"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    emailSignUp = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    
    emailSignIn = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    
    signOut = () => this.auth.signOut();

    resetPWD = email => this.auth.sendPasswordResetEmail(email);

    updatePWD = password =>
        this.auth.currentUser.updatePassword(password);


}

export default Firebase;