import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, useHistory} from 'react-router-dom'
import {Button, Container, Grid, Paper, TextField, Typography} from '@mui/material'

const EdditPost = ({posts, setPosts}) => {
	const {id} = useParams()
	const history = useHistory()
	const [titleEdit, setTitleEdit] = useState('')
	const [textEdit, setTextEdit] = useState('')
	let post = posts.filter((item) => item.id == id)
	let {title, text} = post[0]

	const updatePost = (id) => {
		axios
			.put('http://localhost:5000/posts/update', {
				title: titleEdit,
				text: textEdit,
				postId: id,
			})
			.then(() => {
				axios.get('http://localhost:5000/posts/get').then((response) => {
					setPosts(response.data)
				})
			})
		setTitleEdit('')
		setTextEdit('')
		history.push('/')
	}

	return (
		<Container fixed>
			<Paper
				sx={{padding: '2rem', width: '100%', marginTop: '5rem'}}
				elevation={10}
				variant='elevation'
			>
				<Grid
					sx={{marginTop: '0.5rem'}}
					container
					direction='column'
					justifyContent='center'
					alignItems='center'
				>
					<Typography component='div' color='textSecondary' gutterBottom variant='h4'>
						Review editing
					</Typography>
					<TextField
						id='outlined-textarea'
						placeholder={title}
						multiline
						sx={{marginBottom: '1rem'}}
						onChange={(e) => setTitleEdit(e.target.value)}
						fullWidth
					/>
					<TextField
						id='outlined-multiline-static'
						placeholder={text}
						multiline
						sx={{marginBottom: '1rem'}}
						onChange={(e) => setTextEdit(e.target.value)}
						rows={6}
						fullWidth
					/>
					<Button onClick={() => updatePost(id)} variant='contained' color='success'>
						Edit
					</Button>
				</Grid>
			</Paper>
		</Container>
	)
}

export default EdditPost
