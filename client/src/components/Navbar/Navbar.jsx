import React, {useEffect, useState} from 'react'
import {Box, AppBar, Toolbar, Typography, Button, IconButton} from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import {Link} from 'react-router-dom'

const Navbar = () => {
	const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn'))

	useEffect(() => {
		setLoggedIn(localStorage.getItem('loggedIn'))
	}, [loggedIn])

	return (
		<Box sx={{flexGrow: 1}}>
			<AppBar position='static'>
				<Toolbar>
					<Link style={{textDecoration: 'none', color: '#fff'}} to='/user'>
						<IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{mr: 2}}>
							<AccountBoxIcon />
						</IconButton>
					</Link>

					<Typography variant='h6' component='div' sx={{flexGrow: 1}}>
						<Link style={{textDecoration: 'none', color: '#fff'}} to='/'>
							Home Page
						</Link>
					</Typography>
					{localStorage.getItem('name') ? (
						<Button color='inherit' variant='outlined'>
							<Link style={{textDecoration: 'none', color: '#fff'}} to='/create'>
								create review
							</Link>
						</Button>
					) : (
						<Button color='inherit' variant='outlined'>
							<Link style={{textDecoration: 'none', color: '#fff'}} to='/signup'>
								Sign up
							</Link>
						</Button>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Navbar
