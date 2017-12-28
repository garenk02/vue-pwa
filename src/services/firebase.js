import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCbrsbtEmkBETxQrtFFVLeKpmXrSTvgLBc',
  authDomain: 'cropchat-9ca27.firebaseapp.com',
  databaseURL: 'https://cropchat-9ca27.firebaseio.com',
  projectId: 'cropchat-9ca27',
  storageBucket: 'cropchat-9ca27.appspot.com',
  messagingSenderId: '659579236955'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
