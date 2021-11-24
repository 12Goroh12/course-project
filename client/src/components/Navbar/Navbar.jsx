import React, {useState} from 'react'
import {Box, AppBar, Toolbar, Typography, Button, IconButton} from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import {Link} from 'react-router-dom'

const Navbar = () => {
	const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn'))
	const [name, setName] = useState(localStorage.getItem('name'))

	const logOff = () => {
		localStorage.setItem('loggedIn', false)
		setName(localStorage.removeItem('name'))
	}

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
					{name ? (
						<div>
							<Button sx={{marginRight: '1rem'}} color='inherit' variant='outlined'>
								<Link style={{textDecoration: 'none', color: '#fff'}} to='/create'>
									create review
								</Link>
							</Button>
							<Button onClick={logOff} color='inherit' variant='outlined'>
								Log off
							</Button>
						</div>
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
