import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './auth/SignUp'
import Login from './auth/Login.jsx'
import Navbar from './components/Navbar/Navbar'
import Home from './shared/Home/Home'
import AppContext from './Context/Context'
import UserPage from './users/UserPage/UserPage'
import CreateReview from './shared/CreateReview/CreateReview'

const App = () => {

	useEffect(() => {
		if (!localStorage.getItem('loggedIn')) {
			localStorage.setItem('loggedIn', false)
		}
	}, [])

	return (
		<AppContext.Provider value={{

		}}>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact>
						<Home />
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
						<CreateReview />
					</Route>
				</Switch>
			</Router>
		</AppContext.Provider>
	)
}

export default App
