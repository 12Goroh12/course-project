import React from 'react'
import {Link} from 'react-router-dom'

const GetFeedback = ({postSearch}) => {
	return (
		<div>
			<div>
				{postSearch.length === 0
					? null
					: postSearch.map((item) => (
							<Link key={item.id} to={`/post/${item.id}`}>
								<p>{item.title}</p>
							</Link>
					  ))}
			</div>
		</div>
	)
}

export default GetFeedback
