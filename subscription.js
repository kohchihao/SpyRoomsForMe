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

const subscribeTo = (room, user_id, callback) => {
  db.collection(room)
    .doc(user_id.toString())
    .set({
      user_id: user_id
    })
    .then(docRef => {
      db.collection('room')
        .doc(room)
        .get()
        .then(doc => {
          if (doc.exists) {
            console.log('query update...', doc.data());
            db.collection('room')
              .doc(room)
              .update({
                count: doc.data().count + 1
              });
          } else {
            console.log('no doc exists.');
            db.collection('room')
              .doc(room)
              .set({
                count: 1
              });
          }
          callback();
        });
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
}

const unsubscribeTo = (room, user_id, callback) => {
  db.collection(room)
    .doc(user_id.toString())
    .delete()
    .then(() => {
      console.log('Document successfully deleted!');
      db.collection('room')
        .doc(room)
        .get()
        .then(doc => {
          if (doc.exists) {
            console.log('query update...', doc.data());
            if (doc.data().count > 0) {
              db.collection('room')
                .doc(room)
                .update({
                  count: doc.data().count - 1
                })
                .then(() => {
                  callback();
                });
            }
            callback();
          }
        });
    })
    .catch(function(error) {
      console.error('Error removing document: ', error);
    });
}

module.exports = { subscribeTo, unsubscribeTo };
