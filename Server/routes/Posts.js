const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.get('/get', (req, res) => {
	db.query("SELECT * FROM posts", (err, result) => {
		if (err) {
			console.log(err)
		} else {
			res.send(result)
		}
	})
})

module.exports = router