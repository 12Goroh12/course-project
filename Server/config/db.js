const mysql = require('mysql')

const db = mysql.createConnection({
	user: 'root',
	host: 'localhost',
	password: 'Power_123',
	database: 'new_data',
})

module.exports = db