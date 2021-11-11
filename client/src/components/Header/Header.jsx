import React, {useContext} from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import {Link} from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Context} from '../..'
import {HOME_ROUTES, LOGIN_ROUTES, REGISTRATION_ROUTES, USER_ROUTES} from '../../utils/constants'

const Header = () => {
	const {auth} = useContext(Context)
	const [user] = useAuthState(auth)

	const signOut = () => {
		if (window.confirm('Do you really want to leave?')) {
			auth.signOut()
		}
	}
	return (
		<Box sx={{flexGrow: 1}}>
			<AppBar color='inherit' position='static'>
				<Toolbar>
					<Link style={{textDecoration: 'none', color: 'black'}} to={USER_ROUTES}>
						<IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{mr: 2}}>
							<MenuIcon />
						</IconButton>
					</Link>

					<Typography variant='h6' component='div' sx={{flexGrow: 1}}>
						<Link style={{textDecoration: 'none', color: 'black'}} to={HOME_ROUTES}>
							Reviews
						</Link>
					</Typography>

					{user ? (
						<Button onClick={signOut} variant='outlined' color='inherit'>
							Sign out
						</Button>
					) : (
						<>
							<Link style={{textDecoration: 'none', color: 'black'}} to={REGISTRATION_ROUTES}>
								<Button variant='outlined' color='inherit'>
									Registration
								</Button>
							</Link>

							<Link style={{textDecoration: 'none', color: 'black'}} to={LOGIN_ROUTES}>
								<Button sx={{marginLeft: 2}} variant='outlined' color='inherit'>
									Login
								</Button>
							</Link>
						</>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Header
