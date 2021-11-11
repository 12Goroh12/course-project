const express = require('express')
const app = express()

const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())


const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'reviews',
	password: 'Power_123',
})

app.post('/create', (req, res) => {
	const id = req.body.id
	const title = req.body.title
	const description = req.body.description

	db.query("INSERT INTO data_table (id,title,description) VALUES (?,?,?)", [
		id, title, description
	], (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send("Values Inserted")
		}
	})
})


app.get('/reviews', (req, res) => {
	db.query("SELECT * FROM data_table", (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result)
		}
	})
})

app.listen(3001, () => {
	console.log('running port 3001');

})

