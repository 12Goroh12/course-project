import FirstPage from '../page/FirstPage/FirstPage'
import Login from '../page/Login/Login'
import Registration from '../page/Registration/Registration'
import User from '../page/User/User'
import { LOGIN_ROUTES, USER_ROUTES, REGISTRATION_ROUTES, HOME_ROUTES } from './constants'


export const publickRoutes = [
	{
		path: LOGIN_ROUTES,
		Component: Login
	},
	{
		path: REGISTRATION_ROUTES,
		Component: Registration
	},
	{
		path: HOME_ROUTES,
		Component: FirstPage
	}
]

export const privatRoutes = [
	{
		path: USER_ROUTES,
		Component: User
	},
	{
		path: HOME_ROUTES,
		Component: FirstPage
	}
]