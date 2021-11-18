const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.post('/', (req, res) => {
	const title = req.body.title
	const text = req.body.text
	const image = req.body.image
	const author = req.body.author
	const category = req.body.category

	db.query(
		'INSERT INTO posts (title, text, image, author, category) VALUES (?,?,?,?,?)',
		[title, text, image, author, category],
		(err, result) => {
			if (err) {
				console.log(err)
			} else {
				res.send(result)
			}
		},
	)
})

module.exports = router
