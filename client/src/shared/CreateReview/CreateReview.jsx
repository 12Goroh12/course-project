import {Button, ButtonGroup, Container, Grid, Paper, TextField, Typography} from '@mui/material'
import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
	paper: {
		padding: '50px',
		width: '100%',
	},
	grid: {
		marginTop: '5rem',
	},
	active: {
		backgroundColor: '#af0000',
		color: '#fff',
		border: '1px solid black',
	},
	input: {
		marginBottom: '2rem',
	},
	btn: {
		height: '55px',
		marginLeft: '1rem',
	},
})

const CreateReview = () => {
	const history = useHistory()
	const classes = useStyles()
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')
	const [image, setImage] = useState([])
	const [category, setCategory] = useState([])
	const [select, setSelect] = useState(null)

	useEffect(() => {
		const getCategory = () => {
			axios.get('http://localhost:5000/category/get').then(({data}) => {
				setCategory(data)
			})
		}

		getCategory()
	}, [])

	const createReview = () => {
		if (select === null) {
			alert('КАТЕГОРИЮ SELECT!!!')
		} else {
			const formData = new FormData()
			formData.append('file', image[0])
			formData.append('upload_preset', 'udmcav7k')

			axios
				.post('https://api.cloudinary.com/v1_1/bsslmves/image/upload', formData)
				.then((response) => {
					const fileName = response.data.public_id

					axios
						.post('http://localhost:5000/upload', {
							title: title,
							text: text,
							image: fileName,
							author: localStorage.getItem('name'),
							category: select,
						})
						.then(() => {
							history.push('/')
						})
				})
		}
	}

	const selectCategory = (string) => {
		setSelect(string)
	}

	console.log(select)

	return (
		<Container container='true' fixed>
			<Grid
				className={classes.grid}
				container
				direction='column'
				justifyContent='center'
				alignItems='center'
			>
				<Paper className={classes.paper} elevation={10} variant='elevation'>
					<Grid container direction='column' justifyContent='center' alignItems='center'>
						<Typography component='h3' variant='h6' gutterBottom color='textPrimary'>
							Create an overview
						</Typography>
						{select === null ? (
							<Typography color='textSecondary' gutterBottom component='span' variant='p'>
								Select a category
							</Typography>
						) : (
							<Typography color='textSecondary' gutterBottom component='span' variant='p'>
								{select} category selected
							</Typography>
						)}
						<ButtonGroup color='inherit' sx={{marginBottom: '1rem'}}>
							{category.map((item) => (
								<Button onClick={() => selectCategory(item.category_name)}>
									{item.category_name}
								</Button>
							))}
						</ButtonGroup>
						<TextField
							fullWidth
							className={classes.input}
							id='outlined-textarea'
							label='Review title'
							placeholder='Enter the title of the review'
							multiline
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<TextField
							fullWidth
							className={classes.input}
							id='outlined-multiline-static'
							label='Description'
							placeholder='Describe the review'
							multiline
							rows={6}
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
						<Grid container direction='row' justifyContent='space-between' alignItems='center'>
							<label htmlFor='contained-button-file'>
								<TextField
									onChange={(e) => setImage(e.target.files)}
									id='contained-button-file'
									multiple
									type='file'
								/>
							</label>
							<Button onClick={createReview} variant='contained' className={classes.btn}>
								Create Review
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Container>
	)
}

export default CreateReview
