import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from '../AppRoute'
import Header from '../components/Header/Header'

const Home = () => {
	return (
		<BrowserRouter>
			<Header />
			<AppRoute />
		</BrowserRouter>
	)
}

export default Home
