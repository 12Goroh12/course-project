const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.post('/register', (req, res) => {
	const name = req.body.name
	const password = req.body.password
	const email = req.body.email

	db.query("INSERT INTO users (name, password, email) VALUES (?,?,?)", [name, password, email], (err, result) => {
		if (err) {
			console.log(err)
		} else {
			res.send('Success')
		}
	})
})

router.post('/login', (req, res) => {
	const { email, password, name } = req.body

	db.query("SELECT * FROM users WHERE email = ?", email, (err, result) => {
		if (err) {
			console.log(err)
		}
		if (result.length > 0) {
			if (password === result[0].password) {
				res.json({ loggedIn: true, email: email, name: name })
			} else {
				res.json({ loggedIn: false, message: "Wrong email/password/name ombo!" })
			}
		} else {
			res.json({ loggedIn: false, message: "User dosen't exist" })
		}
	})
})

router.get('/get/:name', (req, res) => {
	const { name } = req.params
	db.query("SELECT * FROM posts WHERE author = ?", name, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			res.send(result)
		}
	})
})

router.get('/:name', (req, res) => {
	const { name } = req.params

	db.query("SELECT * users WHERE name = ?", name, (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)

	})

})

module.exports = router