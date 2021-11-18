import React, {useState} from 'react'
import axios from 'axios'
import {Button, Container, Grid, Paper, TextField, Typography} from '@mui/material'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
	form: {
		marginTop: '5rem',
	},
	wrong: {
		color: 'red',
	},
})

const Login = () => {
	const {register, handleSubmit, reset} = useForm({mode: 'onChange'})
	const classes = useStyles()
	const [errorMessage, setErrorMessage] = useState('')
	const history = useHistory()

	const onSumbit = async ({name, email, password}) => {
		try {
			const response = await axios.post('http://localhost:5000/user/login', {
				name: name,
				password: password,
				email: email,
			})

			if (response.data.loggedIn) {
				localStorage.setItem('loggedIn', true)
				localStorage.setItem('name', response.data.name)
				history.push('/')
				reset()
			} else {
				setErrorMessage(response.data.message)
			}
			console.log(response)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Container container='true'>
			<form className={classes.form} onSubmit={handleSubmit(onSumbit)}>
				<Grid container direction='column' justifyContent='center' alignItems='center'>
					<Paper elevation={6} sx={{padding: '50px', width: '40%'}} variant='elevation'>
						<Grid container direction='column' justifyContent='center' alignItems='center'>
							<Typography
								color='textSecondary'
								component='h3'
								variant='h6'
								sx={{marginBottom: '2rem'}}
							>
								Welcome!
							</Typography>
							{errorMessage && (
								<Typography sx={{marginBottom: '2rem', color: '#af0000'}} component='span'>
									{errorMessage}
								</Typography>
							)}
							<TextField
								sx={{width: '100%', marginBottom: '1rem'}}
								id='outlined-name'
								label='Name'
								{...register('name', {required: true})}
								color='primary'
								helperText='Enter your Name'
							/>
							<TextField
								sx={{width: '100%', marginBottom: '1rem'}}
								id='outlined-email'
								label='Email'
								{...register('email', {required: true})}
								helperText='Enter your Email'
							/>
							<TextField
								sx={{width: '100%', marginBottom: '1rem'}}
								id='outlined-password'
								label='Password'
								type='password'
								{...register('password', {required: true})}
								helperText='Enter your Password'
							/>
							<Button
								type='submit'
								sx={{width: '100%', height: '50px'}}
								variant='contained'
								color='primary'
							>
								Login
							</Button>
						</Grid>
					</Paper>
				</Grid>
			</form>
		</Container>
	)
}

export default Login
