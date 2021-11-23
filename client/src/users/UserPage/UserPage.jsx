import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UserPage = () => {
	const [user, setUser] = useState([])

	useEffect(() => {
		axios.get(`http://localhost:5000/user/get/${localStorage.getItem('name')}`).then(({data}) => {
			setUser(data)
		})
	}, [])

	console.log(user)

	return (
		<>
			<h1>{localStorage.getItem('name')}</h1>
			{user.push.length === 0
				? 'Loading'
				: user.map((value) => (
						<div>
							<div>{value.title}</div>
							<div>{value.text}</div>
							<div>{value.author}</div>
							<div>{value.likes}</div>
							<div>{value.rating}</div>
						</div>
				  ))}
		</>
	)
}

export default UserPage
