import firebase, { ServiceAccount } from 'firebase-admin';

import credentials from './credentials.json';

firebase.initializeApp({
  credential: firebase.credential.cert(credentials as ServiceAccount),
  databaseURL: "https://kara-628e0.firebaseio.com",
})
console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS)

export default firebase;
