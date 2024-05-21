import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDtw8EWrI3QPOBmKPDSo4WRZtq4Dnte5OY',
  authDomain: 'react-simple-notes-4fbdf.firebaseapp.com',
  projectId: 'react-simple-notes-4fbdf',
  storageBucket: 'react-simple-notes-4fbdf.appspot.com',
  messagingSenderId: '477459653487',
  appId: '1:477459653487:web:62b5a8595861c5e5187e9a'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
