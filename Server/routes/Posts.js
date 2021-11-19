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

router.post('/like/post', (req, res) => {
	const userLike = req.body.userLike
	const postId = req.body.postId

	db.query("INSERT INTO likes (user_like, post_id) VALUES (?,?)", [userLike, postId], (err, result) => {
		if (err) {
			console.log(err)
		}
		db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?", postId, (err2, result2) => {
			if (err) {
				console.log(err)
			}
			res.send(result)
		})

	})
})
// router.post('/like/get', (req, res) => {
// 	db.query("SELECT * FROM like", (err, result) => {
// 		if (err) {
// 			console.log(err)
// 		}
// 		res.send(result)
// 	})
// })

module.exports = router