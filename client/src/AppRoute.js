import React, { useContext } from 'react'
import { LOGIN_ROUTES, REGISTRATION_ROUTES, USER_ROUTES, HOME_ROUTES } from './utils/constants'
import { publickRoutes, privatRoutes } from './utils/routes'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '.'
import { Redirect, Route, Switch } from 'react-router'

const AppRoute = () => {
	const { auth } = useContext(Context)
	const [user] = useAuthState(auth)
	return user ? (
		<Switch>
			{privatRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} component={Component} exact />
			))}
			<Redirect to={USER_ROUTES} />
		</Switch>
	) : (
		<Switch>
			{publickRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} component={Component} exact />
			))}
			<Redirect to={REGISTRATION_ROUTES} />
		</Switch>
	)
}

export default AppRoute
