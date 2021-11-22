import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import SignUp from './auth/SignUp'
import Login from './auth/Login.jsx'
import Navbar from './components/Navbar/Navbar'
import Home from './shared/Home/Home'
import AppContext from './Context/Context'
import UserPage from './users/UserPage/UserPage'
import CreateReview from './shared/CreateReview/CreateReview'
import EdditPost from './components/EdditPost/EdditPost'

const App = () => {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		if (!localStorage.getItem('loggedIn')) {
			localStorage.setItem('loggedIn', false)
		}
		axios.get('http://localhost:5000/posts/get').then((response) => {
			setPosts(response.data)
		})
	}, [])

	return (
		<AppContext.Provider value={{

		}}>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact>
						<Home setPosts={setPosts} posts={posts} />
					</Route>
					<Route path='/signup' exact>
						<SignUp />
					</Route>
					<Route path='/login' exact>
						<Login />
					</Route>
					<Route path='/user' exact>
						<UserPage />
					</Route>
					<Route path='/create' exact>
						<CreateReview setPosts={setPosts} />
					</Route>
					<Route path='/review/:id' exact>
						<EdditPost posts={posts} setPosts={setPosts} />
					</Route>
				</Switch>
			</Router>
		</AppContext.Provider>
	)
}

export default App
