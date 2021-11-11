import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import Home from './Home/Home'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import './style/index.css'

firebase.initializeApp({
	apiKey: 'AIzaSyBZpS59T6shCk4cV1xv6fjbdmH-DgIwLR8',
	authDomain: 'reviews-a01eb.firebaseapp.com',
	projectId: 'reviews-a01eb',
	storageBucket: 'reviews-a01eb.appspot.com',
	messagingSenderId: '351457407267',
	appId: '1:351457407267:web:ac1e26a87ac3433d5b1c96',
	measurementId: 'G-KNRHSR1P7R',
})

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
	<React.StrictMode>
		<Context.Provider
			value={{
				firebase,
				auth,
				firestore,
			}}
		>
			<Home />
		</Context.Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)
