import React, {useContext} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Context} from '../..'
import axios from 'axios'

const User = () => {
	const {auth} = useContext(Context)
	const [user] = useAuthState(auth)

	const [items, setItems] = React.useState([])

	const id = 5
	const title = 'AVENGERS'
	const description = 'Мстители проиграли таносу и погибло 50% людей'

	const postData = () => {
		axios
			.post('http://localhost:3001/create', {
				id: id,
				title: title,
				description: description,
			})
			.then(() => {
				console.log('OK')
			})
	}

	React.useEffect(() => {
		const fetchData = () => {
			axios.get(`http://localhost:3001/reviews`).then(({data}) => {
				setItems(data)
				console.log(data)
			})
		}
		fetchData()
	}, [user])

	return (
		<div>
			<h1>{user.displayName}</h1>
			<h2>СТРАНИЦА ЮЗЕРА</h2>
			<button onClick={postData}>POST DATA</button>
		</div>
	)
}

export default User
