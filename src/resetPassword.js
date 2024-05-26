import { email } from './Login'

function reset() {
    const firebase = require('./firebase');
    const test_email = email;
    const config = {} // TODO: fill
    
    const app = firebase.initializeApp(config);
    app.auth().sendPasswordResetEmail(test_email).then(() => {
      console.log('email sent!');
    }).catch(function(error) {
      // An error happened.
    });
}

export { reset };
