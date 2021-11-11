import React, {useContext} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {Button, Grid, Typography} from '@mui/material'
import {Context} from '../..'
import {Link} from 'react-router-dom'
import {REGISTRATION_ROUTES, USER_ROUTES} from '../../utils/constants'
import firebase from 'firebase/compat/app'

const Login = () => {
	const {auth} = useContext(Context)
	const [loginEmail, setLoginEmail] = React.useState('')
	const [loginPassword, setLoginPassword] = React.useState('')

	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
		} catch (error) {
			console.log(error.message)
		}
	}

	const loginGoogle = async () => {
		const provider = new firebase.auth.GoogleAuthProvider()
		const {user} = await auth.signInWithPopup(provider)
		console.log(user)
	}

	const loginFaceBook = async () => {
		const provider = new firebase.auth.FacebookAuthProvider()
		const {user} = await auth.signInWithPopup(provider)
		console.log(user)
	}

	return (
		<>
			<Typography
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					marginTop: 5,
				}}
				variant='h5'
				color='primary'
			>
				LOGIN TO YOUR ACCOUNT
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					marginTop: 2,
					'& > :not(style)': {m: 1},
				}}
			>
				<TextField
					style={{width: '350px'}}
					helperText='Please enter your email'
					id='demo-helper-text-misaligned'
					label='Email'
					onChange={(e) => setLoginEmail(e.target.value)}
					value={loginEmail}
				/>
				<TextField
					style={{width: '350px'}}
					helperText='Please enter your password'
					id='outlined-password-input'
					label='Password'
					type='password'
					autoComplete='current-password'
					onChange={(e) => setLoginPassword(e.target.value)}
					value={loginPassword}
				/>
				<Button onClick={login} style={{width: '350px'}} variant='outlined' color='inherit'>
					Login
				</Button>
				<Link style={{textDecoration: 'none', color: 'black'}} to={REGISTRATION_ROUTES}>
					<Button style={{width: '350px'}} variant='contained' color='primary'>
						registration
					</Button>
				</Link>
				<Grid container direction={'column'} alignItems={'center'}>
					<Box style={{marginBottom: 10}}>
						<Link style={{textDecoration: 'none', color: 'black'}} to={USER_ROUTES}>
							<Button
								onClick={loginGoogle}
								style={{width: '350px', color: '#000'}}
								variant='outlined'
								color='inherit'
							>
								<GoogleIcon sx={{marginRight: 2}} />
								login with google
							</Button>
						</Link>
					</Box>
					<Box>
						<Link style={{textDecoration: 'none', color: 'black'}} to={USER_ROUTES}>
							<Button
								onClick={loginFaceBook}
								style={{width: '350px', color: '#000'}}
								variant='outlined'
								color='inherit'
							>
								<FacebookOutlinedIcon sx={{marginLeft: 2, marginRight: 2}} />
								login with facebook
							</Button>
						</Link>
					</Box>
				</Grid>
			</Box>
		</>
	)
}

export default Login
