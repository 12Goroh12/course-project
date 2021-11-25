import React from 'react'
import {useParams} from 'react-router'

const SelectPost = ({posts, setPosts}) => {
	const {id} = useParams()
	let post = posts.filter((item) => item.id == id)
	let {title, text} = post[0]
	return (
		<div>
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}

export default SelectPost
