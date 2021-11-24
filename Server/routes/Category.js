const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.get('/get', (req, res) => {
	db.query("SELECT * FROM categoryes", (err, result) => {
		res.send(result)
	})
})
router.get('/get/:name/:author', (req, res) => {
	const { name, author } = req.params

	db.query("SELECT * FROM posts WHERE category = ? AND author = ?", [name, author], (err, result) => {
		if (err) {
			console.log(err)
		} else {
			res.send(result)
		}
	})
})
router.delete('/delete/:id', (req, res) => {
	const { id } = req.params
	db.query('DELETE from posts WHERE id = ?', id, (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})
})


module.exports = router