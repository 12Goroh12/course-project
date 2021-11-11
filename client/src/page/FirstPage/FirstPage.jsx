import React, {useContext} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Context} from '../..'

const FirstPage = () => {
	const {auth} = useContext(Context)
	const [user] = useAuthState(auth)

	return <div>FIRST PAGE</div>
}

export default FirstPage
