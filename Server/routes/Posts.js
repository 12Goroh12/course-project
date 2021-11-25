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

router.put('/rating/post', (req, res) => {
	const { postId, rating } = req.body
	db.query("UPDATE posts SET rating = ? WHERE id = ?", [rating, postId], (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})

})

router.put('/update', (req, res) => {
	const { title, text, postId } = req.body

	db.query("UPDATE posts SET title = ?, text = ? WHERE id = ?", [title, text, postId], (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})
})

router.delete('/delete', (req, res) => {
	const postId = req.body.postId

	db.query("DELETE from posts WHERE id = ?", postId, (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})
})

router.get('/sortBy/:name/title', (req, res) => {
	const { name } = req.params

	db.query("SELECT * FROM posts WHERE author = ? order by title asc ", name, (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})
})
router.get('/sortBy/:name/likes', (req, res) => {
	const { name } = req.params

	db.query("SELECT * FROM posts WHERE author = ? order by likes desc ", name, (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})
})
router.get('/sortBy/:name/rating', (req, res) => {
	const { name } = req.params

	db.query("SELECT * FROM posts WHERE author = ? order by rating desc ", name, (err, result) => {
		if (err) {
			console.log(err)
		}
		res.send(result)
	})
})



module.exports = router