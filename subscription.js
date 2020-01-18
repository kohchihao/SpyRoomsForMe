const firebase = require('firebase');

var firebaseConfig = {
  apiKey: process.env.FIREBASE_CONFIG_API_KEY,
  authDomain: 'spyroomsforme.firebaseapp.com',
  databaseURL: 'https://spyroomsforme.firebaseio.com',
  projectId: 'spyroomsforme',
  storageBucket: 'spyroomsforme.appspot.com',
  messagingSenderId: process.env.FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_CONFIG_APP_ID
};
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function subscribeTo(room, user_id) {
  db.collection(room)
    .add({
      user_id: user_id,
    })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });

  db.collection(`room`).doc(room).get().then((doc) => {
    
    if (doc.exists) {
      console.log('query update...',doc.data())
      db.collection('room').doc(room).update({
        count: doc.data().count + 1
      });
    } else {
      console.log('no doc exists.')
      db.collection('room').doc(room).update({
        count: 1
      });
    }
  });
}


module.exports = { subscribeTo }
