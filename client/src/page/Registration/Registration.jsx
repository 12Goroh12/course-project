import {Button, TextField, Typography} from '@mui/material'
import {Box} from '@mui/system'
import {Link} from 'react-router-dom'
import React, {useContext} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {LOGIN_ROUTES} from '../../utils/constants'
import {Context} from '../..'

const Registration = () => {
	const {auth} = useContext(Context)
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')

	const registration = async () => {
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password)
		} catch (error) {
			console.log(error.message)
		}
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
				REGISTRATION
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
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<TextField
					style={{width: '350px'}}
					helperText='Please enter your password'
					id='outlined-password-input'
					label='Password'
					type='password'
					autoComplete='current-password'
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
				<Button onClick={registration} style={{width: '350px'}} variant='outlined' color='inherit'>
					Register now
				</Button>
				<Link style={{textDecoration: 'none', color: 'black'}} to={LOGIN_ROUTES}>
					<Button style={{width: '350px'}} variant='contained' color='primary'>
						Login
					</Button>
				</Link>
			</Box>
		</>
	)
}

export default Registration
